import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import '../../styles.css'
import { fetchSong, deleteSong, removeAlert } from '../../actions'
import Modal from './../Modal'
import Verses from './../Verses'
import MyLoader from '../MyLoader'

const SMALL_FONT_SIZE = 18
const BIG_FONT_SIZE = 60

class SongShow extends React.Component {
    state = {
        fontSize: SMALL_FONT_SIZE,
        deleteModalActive: false,
        deletePassword: '',
        oneVerseModeActive: false,
        currentVerse: 0,
        fullScreen: false,
    }

    handleKeyDown = (e) => {
        switch(e.code) {
            case 'ArrowRight':
                this.handleVerseChange(true)
                break
            case 'ArrowLeft':
                this.handleVerseChange(false)
                break
            case 'Escape':
                this.setState({fullScreen: false})
                break
            default:
        }
    }

    onSizeChange = (increase) => {
        if (increase && this.state.fontSize < 70) {
            this.setState({fontSize: this.state.fontSize + 3})
        } else if (!increase && this.state.fontSize > 8) {
            this.setState({fontSize: this.state.fontSize - 3})
        }
    }

    componentDidMount() {
        this.props.removeAlert()
        this.props.fetchSong(this.props.match.params.id)
    }

    handleModeSwitch = () => {
        if (this.state.oneVerseModeActive) {
            this.setState({oneVerseModeActive: false, fontSize: SMALL_FONT_SIZE})
        } else {
            this.setState({oneVerseModeActive: true, fontSize: BIG_FONT_SIZE})
        }
    }

    handleVerseChange = forward => {
        if (forward) {
            this.setState({currentVerse: (this.state.currentVerse + 1) % this.props.song.verses.length})
        } else {
            if (this.state.currentVerse === 0) {
                this.setState({currentVerse: (this.props.song.verses.length - 1)})
            } else {
                this.setState({currentVerse: (this.state.currentVerse - 1) % this.props.song.verses.length})
            }
        }
    }

    handleFontSizeReset = () => {
        if (this.state.oneVerseModeActive) {
            this.setState({ fontSize: BIG_FONT_SIZE })
        } else {
            this.setState({ fontSize: SMALL_FONT_SIZE })
        }
    }

    renderVerses = () => {
        if (!this.state.oneVerseModeActive) {
            return <div className="ui container"> {this.props.song.verses.map((verse, idx) => {
                const lines = verse.split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)
                return (
                    <p style={{fontSize: `${this.state.fontSize}px`}} key={idx}>
                        {lines}
                    </p>
                )
            })}</div>
        }
        const lines = this.props.song.verses[this.state.currentVerse].split('\n').map((line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>)
        return (
            <div className="sec-container">
                <p style={{fontSize: `${this.state.fontSize}px`}}>
                    {lines}
                </p>
            </div>
        )

    }

    renderButtons = () => {
        return (
            <div className="">
                <Link   data-tip="Szerkeztés" className="ui button my-button yellow" to={`/dicsi/songs/edit/${this.props.match.params.id}`}><i className="icon edit"></i></Link>
                <button data-tip="Törlés" className="ui button my-button negative" onClick={() => this.setState({deleteModalActive: true})}><i className="icon trash alternate"></i></button>
                <button data-tip="Betűméret csökkentése" className="ui button my-button primary" onClick={() => this.onSizeChange(false)}><i className="font icon"></i><i className="arrow down icon"></i></button>
                <button data-tip="Betűméret növelése" className="ui button my-button primary" onClick={() => this.onSizeChange(true)}><i className="font icon"></i><i className="arrow up icon"></i></button>
                <button data-tip="Betűméret visszaállítása" className="ui button my-button primary" onClick={this.handleFontSizeReset}><i className="font icon"></i><i className="undo icon"></i></button>
                <button data-tip="Teljes képernyő" className="ui button my-button grey" onClick={() => this.setState({fullScreen: true})}><i className="icon expand arrows alternate"></i></button>
                <button data-tip="Előző versszak" disabled={!this.state.oneVerseModeActive} className="ui button my-button teal" onClick={() => this.handleVerseChange(false)}><i className="step backward icon"></i></button>
                <button data-tip="Egyversszak mód be- és kikapcsolása" className="ui button my-button green" onClick={this.handleModeSwitch}><i className="play icon"></i></button>
                <button data-tip="Következő vesszak" disabled={!this.state.oneVerseModeActive} className="ui button my-button teal" onClick={() => this.handleVerseChange(true)}><i className="step forward icon"></i></button>
            </div>
        )
    }

    renderTitle = () => {
        return (
            <>
                <div className="title-cont">
                    <h2 className="vert-centered">{this.props.song.id}. {this.props.song.title} </h2>
                    <h2 className="vert-centered">{this.state.oneVerseModeActive ? `${this.state.currentVerse + 1}/${this.props.song.verses.length}` : ''}</h2>
                    {this.renderButtons()}
                </div>
                <div className="ui divider"></div>
            </>

        )
    }

    onFullScreenExit = () => {
        this.setState({ fullScreen: false })
    }

    render() {
        if (this.props.song) {
            const actions = () => (
                <>
                    <button className="ui button" onClick={()=> this.setState({deleteModalActive: false})}>Mégse</button>
                    <button className="ui negative button" onClick={() => this.props.deleteSong(this.props.match.params.id, this.state.deletePassword)}>Törlés</button>
                </>
            )
            const modal = this.state.deleteModalActive ? <Modal
                    header="Biztosan törlöd ezt a dalt?"
                    content={`Biztosan törlöd a(z) ${this.props.song.title} dalt? Ezt később nem tudod visszavonni!`}
                    actions={actions()}
                    onDismissed={()=> this.setState({deleteModalActive: false})}
                    password={this.state.deletePassword}
                    setPassword={(value) => this.setState({ deletePassword: value})}
                /> : null


            return (
                <>
                <ReactTooltip effect="solid"/>
                {modal}
                <div onKeyDown={this.handleKeyDown}>
                    <div className="ui container">
                        <Verses verses={this.renderVerses()} title={this.renderTitle()} fullScreen={this.state.fullScreen} exitFullScreen={this.onFullScreenExit}/>
                    </div>

                </div>
                </>

            )
        }
        return <MyLoader />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        song: state.songs[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchSong, deleteSong, removeAlert })(SongShow)