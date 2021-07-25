import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MyTooltip from '../MyTooltip'
import { isMobileOnly } from 'react-device-detect'

import '../../styles.css'
import { fetchSong, deleteSong, removeAlert, addToPlaylist, toggleVisibility } from '../../actions'
import Modal from './../Modal'
import MyLoader from '../MyLoader'
import MyButton from '../MyButton'

const SMALL_FONT_SIZE = 18
const BIG_FONT_SIZE = 60

class SongShow extends React.Component {
    state = {
        fontSize: SMALL_FONT_SIZE,
        deleteModalActive: false,
        deletePassword: '',
        oneVerseModeActive: false,
        currentVerse: 0,
        showButtons: !isMobileOnly,
        twoColumnMode: false
    }

    handleKeyDown = (e) => {
        switch(e.code) {
            case 'ArrowRight':
                this.handleVerseChange(true)
                break
            case 'ArrowLeft':
                this.handleVerseChange(false)
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

    renderLine = (line, idx) => <React.Fragment key={idx}>{line}<br/></React.Fragment>

    renderVerse = (verse, idx) => {
        const lines = verse.split('\n').map((line, idx) => this.renderLine(line, idx))
        return (
            <p style={{fontSize: `${this.state.fontSize}px`}} key={idx}>
                {lines}
            </p>
        )
    }

    renderVerses = () => {
        if (!this.state.oneVerseModeActive) {
            if (this.state.twoColumnMode) {
                const firstColumn = this.props.song.verses.map((verse, idx) => {
                    if (idx + 1 <= this.props.song.verses.length / 2) {
                        return this.renderVerse(verse, idx)
                    } else {
                        return null
                    }
                })
                const secondColumn = this.props.song.verses.map((verse, idx) => {
                    if (idx + 1 > this.props.song.verses.length / 2) {
                        return this.renderVerse(verse, idx)
                    } else {
                        return null
                    }
                })
                return (
                    <div className="ui container grid">
                        <div className="eight wide column">
                            {firstColumn}
                        </div>
                        <div className="eight wide column">
                            {secondColumn}
                        </div>
                    </div>
                )
            } else {
                return <div className="ui container"> {this.props.song.verses.map((verse, idx) => {
                    return this.renderVerse(verse, idx)
                })}</div>
            }
        }
        const lines = this.props.song.verses[this.state.currentVerse].split('\n').map((line, idx) => this.renderLine(line, idx))
        return (
            <div className="">
                <p style={{fontSize: `${this.state.fontSize}px`}}>
                    {lines}
                </p>
            </div>
        )

    }

    onPlaylistAdd = () => {
        this.props.addToPlaylist(parseInt(this.props.match.params.id))
        if (!this.props.plVisible) {
            this.props.toggleVisibility()
        }
    }

    renderButtons = () => {
        const desktopButton = !isMobileOnly ? (
            <>
                <MyButton tip="Előző versszak" disabled={!this.state.oneVerseModeActive} color="teal" onClick={() => this.handleVerseChange(false)} icons={[" step backward icon" ]} />
                <MyButton tip="Egyversszak mód be- és kikapcsolása" color="green" onClick={this.handleModeSwitch} icons={["play" ]} />
                <MyButton tip="Következő vesszak" disabled={!this.state.oneVerseModeActive} color="teal" onClick={() => this.handleVerseChange(true)} icons={[" step forward icon" ]} />
            </>
        ) : null
        const optionalButtons = this.state.showButtons ? (
            <>
                <Link data-tip="Vissza a kereséshez" className="ui button my-button icon grey" to="/dicsi/"><i className="icon search"></i></Link>
                <Link data-tip="Dal szerkeztése" className="ui button my-button icon yellow" to={`/dicsi/songs/edit/${this.props.match.params.id}`}><i className="icon edit"></i></Link>
                <MyButton tip="Dal törlése" color="negative" onClick={() => this.setState({deleteModalActive: true})} icons={["trash alternate" ]} />
                <MyButton tip={`${this.state.twoColumnMode ? "Egy" : "Két"} hasáb`} color="primary" onClick={() => this.setState({twoColumnMode: !this.state.twoColumnMode})} disabled={this.state.oneVerseModeActive} icons={[`${this.state.twoColumnMode ? 'align justify' : 'columns'}`]} />
                <MyButton tip="Betűméret csökkentése" color="primary" onClick={() => this.onSizeChange(false)} icons={["font", "arrow down" ]} />
                <MyButton tip="Betűméret növelése" color="primary" onClick={() => this.onSizeChange(true)} icons={["font", "arrow up " ]} />
                <MyButton tip="Betűméret visszaállítása" color="primary" onClick={this.handleFontSizeReset} icons={["font", "undo" ]} />
                <MyButton tip="Hozzáadás a lejátszási listához" color="green" onClick={this.onPlaylistAdd } icons={["plus" ]} />
                <MyButton color="green" onClick={this.props.toggleVisibility} icons={["play circle"]} text=" Lejátszási lista"/>
            </>
        ) : null
        return (
            <div>
                <MyButton color="gray" onClick={()=>this.setState({showButtons: !this.state.showButtons})} icons={["bars"]} tip="Gombok elrejtése/előhozása"/>
                {optionalButtons}
                {desktopButton}
            </div>
        )
    }

    renderTitle = () => {
        return (
            <>
                <div className="right-left m-top">
                    <h2 className="vert-centered">{this.props.song.id}. {this.props.song.title} </h2>
                    <h2 className="vert-centered">{this.state.oneVerseModeActive ? `${this.state.currentVerse + 1}/${this.props.song.verses.length}` : ''}</h2>
                    {this.renderButtons()}
                </div>
                <div className="ui divider"></div>
            </>

        )
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
                <MyTooltip />
                {modal}
                <div onKeyDown={this.handleKeyDown}>
                    <div className="ui container">
                        <div className="full-screen">
                            {this.renderTitle()}
                            {this.renderVerses()}
                        </div>
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
        song: state.songs[ownProps.match.params.id],
        plVisible: state.playlist.visible
    }
}

export default connect(mapStateToProps, { fetchSong, deleteSong, removeAlert, addToPlaylist, toggleVisibility })(SongShow)