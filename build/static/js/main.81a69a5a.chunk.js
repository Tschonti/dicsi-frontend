(this["webpackJsonpdicsi-react"]=this["webpackJsonpdicsi-react"]||[]).push([[0],{361:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n.n(s),i=n(32),a=n.n(i),c=n(14),o=n(17),l=n(195),d=n(152),u=(n(220),n(398)),p=n(86),j=n(11),b=n(46),h=n.n(b),m="FETCH_SONGS",O="UPDATE_WITH_WRONG_ID",f="UPDATE_WITH_ID",v="UPDATE_WITH_TERM",g="CANCEL_SEARCH",y="FETCH_SONG",x="CREATE_SONG",k="EDIT_SONG",N="DELETE_SONG",S="NEW_ALERT",z="REMOVE_ALERT",w="ADD_TO_PLAYLIST",C="REMOVE_FROM_PLAYLIST",I="PLAYLIST_NEXT",V="START_PLAYLIST",A="STOP_PLAYLIST",T="CLEAR_PLAYLIST",M="TOGGLE_VISIBILITY",E="MOVE_IN_PLAYLIST",L="LOGIN",P="LOGOUT",_=n(64),B={list:[],currentIndex:0,active:!1,visible:!1},D={list:[],validSearch:!1},F={signedIn:!1,token:null},G=Object(o.c)({songs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)({},h.a.mapKeys(t.payload,"id"));case y:case x:case k:return Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t.payload.id,t.payload));case N:return h.a.omit(e,t.payload);default:return e}},searchList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{list:[t.payload.id],validSearch:!0};case O:return{list:[],validSearch:!0};case v:return{list:h.a.uniq(t.payload.map((function(e){return e.id}))),validSearch:!0};case g:return D;default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return t.payload;case z:return{};default:return e}},form:u.a,playlist:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(j.a)(Object(j.a)({},e),{},{list:[].concat(Object(_.a)(e.list),[t.payload])});case C:var n=e.list.indexOf(t.payload);if(-1===n)return e;var s=e.currentIndex;(n<s||n===e.list.length-1)&&s>0&&(s-=1);var r=Object(_.a)(e.list);return r.splice(n,1),Object(j.a)(Object(j.a)({},e),{},{list:r,currentIndex:s});case I:return Object(j.a)(Object(j.a)({},e),{},{currentIndex:t.payload});case V:return Object(j.a)(Object(j.a)({},e),{},{active:!0});case A:return Object(j.a)(Object(j.a)({},e),{},{active:!1});case T:return Object(j.a)(Object(j.a)({},e),{},{list:[],currentIndex:0,active:!1});case M:return Object(j.a)(Object(j.a)({},e),{},{visible:!e.visible});case E:if(0===t.payload.index&&t.payload.up||t.payload.index===e.list.length-1&&!t.payload.up)return e;var i=t.payload.up?t.payload.index-1:t.payload.index+1,a=Object(j.a)({},e),c=a.list[i];a.list[i]=a.list[t.payload.index],a.list[t.payload.index]=c;var o=0;return e.currentIndex===t.payload.index?o=t.payload.up?-1:1:e.currentIndex===i&&(o=t.payload.up?1:-1),a.currentIndex+=o,a;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{signedIn:!0,token:t.payload};case P:return F;default:return e}}}),R=n(16),K=n(39),H=n(40),Y=n(44),U=n(42),W=n(24),J=n(22),X=(n(76),function(e,t){e.response?401===e.response.status||403===e.response.status?t({type:S,payload:{msg:"Nem vagy bejelentkezve",type:"error"}}):400===e.response.status?t({type:S,payload:{msg:"Hib\xe1s felhaszn\xe1l\xf3n\xe9v vagy jelsz\xf3",type:"error"}}):(t({type:S,payload:{msg:"".concat(e.response.status,": ").concat(e.response.statusText),type:"error"}}),console.error(e.response)):(t({type:S,payload:{msg:"Valami baj van",type:"error"}}),console.error(e)),function(e){setTimeout((function(){return e({type:z})}),5e3)}(t)}),q=function(e,t){e.sort((function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}))},Q=n(197),Z=n(1),$=function(){return W.isMobile?null:Object(Z.jsx)(Q.a,{effect:"solid"})},ee=n(198),te=n.n(ee),ne=function(){return Object(Z.jsxs)("div",{className:"loader-container",children:[Object(Z.jsx)(te.a,{type:"Oval",color:"#999897",visible:!0}),Object(Z.jsx)("p",{className:"big-text",children:"Bet\xf6lt\xe9s..."})]})},se=n(88),re=function(e){var t=Object(s.useState)(""),n=Object(se.a)(t,2),r=n[0],i=n[1],a=Object(s.useState)(""),c=Object(se.a)(a,2),o=c[0],l=c[1],d=Object(s.useState)(!1),u=Object(se.a)(d,2),p=u[0],j=u[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){l(r)}),350);return function(){clearTimeout(e)}}),[r]),Object(s.useEffect)((function(){o?isNaN(o)?e.term(o,p):e.id(o):e.cancel()}),[o]),Object(s.useEffect)((function(){r&&isNaN(r)&&e.term(r,p)}),[p]),Object(Z.jsx)("div",{className:"ui form",children:Object(Z.jsxs)("div",{className:"inline fields centered-container",children:[Object(Z.jsxs)("div",{className:"thirteen wide field",children:[Object(Z.jsx)("label",{children:"Keres\xe9s"}),Object(Z.jsx)("input",{value:r,onChange:function(e){return i(e.target.value)},placeholder:"\xcdrd be egy \xe9nek sorsz\xe1m\xe1t vagy c\xedm\xe9nek, sz\xf6veg\xe9nek egy r\xe9szlet\xe9t!"})]}),Object(Z.jsx)("div",{className:"three wide field",children:Object(Z.jsxs)("div",{className:"ui checkbox my-check",children:[Object(Z.jsx)("input",{id:"lyricsCheckbox",type:"checkbox",tabIndex:"0",checked:p,onChange:function(){return j(!p)}}),Object(Z.jsx)("label",{htmlFor:"lyricsCheckbox",children:"dalsz\xf6vegben is"})]})})]})})},ie=function(e){var t=e.icons.map((function(e,t){return Object(Z.jsx)("i",{className:"icon ".concat(e)},t)}));return Object(Z.jsxs)("button",{"data-tip":e.tip,"aria-label":e.tip,className:"ui button my-button icon ".concat(e.color),onClick:e.onClick,disabled:e.disabled,children:[t,e.text]})},ae=n(21),ce=n.n(ae),oe=n(47),le=n(199),de=n.n(le).a.create({baseURL:"https://dicsi-api.herokuapp.com/"}),ue=n(30),pe=Object(ue.a)(),je=function(){return function(){var e=Object(oe.a)(ce.a.mark((function e(t){var n;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.get("/songs/?format=json");case 3:n=e.sent,t({type:m,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),X(e.t0,t);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},be=function(e){return function(){var t=Object(oe.a)(ce.a.mark((function t(n){var s;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.get("/songs/".concat(e,"/?format=json"));case 3:s=t.sent,n({type:y,payload:s.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),X(t.t0,n);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},he=function(e,t){return function(){var t=Object(oe.a)(ce.a.mark((function t(n,s){return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.delete("/songs/".concat(e,"/"),{headers:{Authorization:"Token ".concat(s().auth.token)}});case 3:s().playlist.list.includes(parseInt(e))&&n({type:C,payload:parseInt(e)}),n({type:N,payload:e}),pe.push("/dicsi/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),X(t.t0,n);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()},me=function(e){return{type:w,payload:e}},Oe=function(e){return{type:C,payload:e}},fe=function(e,t){if(t.active)return e?t.currentIndex===t.list.length-1?(pe.push("/dicsi/songs/".concat(t.list[0])),{type:I,payload:0}):(pe.push("/dicsi/songs/".concat(t.list[t.currentIndex+1])),{type:I,payload:t.currentIndex+1}):t.currentIndex<1?(pe.push("/dicsi/songs/".concat(t.list[t.list.length-1])),{type:I,payload:t.list.length-1}):(pe.push("/dicsi/songs/".concat(t.list[t.currentIndex-1])),{type:I,payload:t.currentIndex-1})},ve=function(){return{type:A}},ge=function(){return{type:M}},ye=function(){return{type:z}},xe=function(e){Object(Y.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(K.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loaded:!1,sortById:!0},e.addToPlaylist=function(t,n){t.preventDefault(),e.props.addToPlaylist(n),t.stopPropagation()},e.removeFromPlaylist=function(t,n){t.preventDefault(),e.props.removeFromPlaylist(n),t.stopPropagation()},e.renderSmallButtons=function(t){if(e.props.plVisible||W.isMobileOnly)return Object(Z.jsxs)("div",{className:"right-left",children:[Object(Z.jsx)("i",{"data-tip":"Hozz\xe1ad\xe1s a lej\xe1tsz\xe1si list\xe1hoz",className:"icon bigger-icon plus circle green",onClick:function(n){return e.addToPlaylist(n,t.id)}}),"\xa0\xa0",Object(Z.jsx)("i",{"data-tip":"Elt\xe1vol\xedt\xe1s a lej\xe1tsz\xe1si list\xe1r\xf3l",className:"icon bigger-icon minus circle red",onClick:function(n){return e.removeFromPlaylist(n,t.id)}})]})},e.renderSong=function(t,n){return Object(Z.jsx)("div",{className:"column pointer hover-grey my-bottom-border ".concat(n%3===0||W.isMobileOnly?"":"left-border"),children:Object(Z.jsx)(J.a,{to:"/dicsi/songs/".concat(t.id),className:"notLinkStyle",children:Object(Z.jsxs)("div",{className:"content right-left",children:[Object(Z.jsxs)("h3",{className:"header my-header-text",children:[t.id,". ",t.title]}),e.renderSmallButtons(t)]})})},t.id)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.removeAlert(),this.props.fetchSongs(),this.props.stopPlaylist()}},{key:"componentDidUpdate",value:function(){this.state.loaded||h.a.isEmpty(this.props.songs)||this.setState({loaded:!0})}},{key:"render",value:function(){var e=this;if(h.a.isEmpty(this.props.songs)&&!this.state.loaded)return Object(Z.jsx)(ne,{});this.state.sortById?q(this.props.songs,"id"):q(this.props.songs,"title");var t=this.props.searchList,n=[],s=0===(n=t.validSearch?t.list.map((function(t,n){return e.renderSong(e.props.songs.find((function(e){return e.id===t})),n)})):this.props.songs.map((function(t,n){return e.renderSong(t,n)}))).length?Object(Z.jsx)("p",{className:"big-text centered-text",children:"Nincs tal\xe1lat!"}):null;return Object(Z.jsxs)("div",{className:"ui container",children:[Object(Z.jsx)($,{}),Object(Z.jsxs)("div",{className:"ui ".concat(W.isMobileOnly?"":"stackable grid"),children:[Object(Z.jsx)("div",{className:"twelve wide column",children:Object(Z.jsx)(re,{id:this.props.findId,term:this.props.searchSongs,cancel:this.props.cancelSearch})}),Object(Z.jsx)("div",{className:"four wide column ",children:Object(Z.jsxs)("div",{className:"centered-container",children:[Object(Z.jsx)(ie,{color:"blue",onClick:function(){return e.setState({sortById:!0})},icons:["sort numeric down"],tip:"\xc9nekek rendez\xe9se sorsz\xe1m szerint",disabled:this.state.sortById||this.props.searchList.validSearch}),Object(Z.jsx)(ie,{color:"blue",onClick:function(){return e.setState({sortById:!1})},icons:["sort alphabet down"],tip:"\xc9nekek rendez\xe9se c\xedm szerint",disabled:!this.state.sortById||this.props.searchList.validSearch}),Object(Z.jsx)(ie,{color:"green",onClick:this.props.toggleVisibility,icons:["play circle"],text:" Lej\xe1tsz\xe1si lista"})]})})]}),Object(Z.jsx)("div",{className:"ui stackable three column grid",children:n}),s]})}}]),n}(r.a.Component),ke=Object(c.b)((function(e){return{songs:Object.values(e.songs),searchList:e.searchList,plVisible:e.playlist.visible}}),{fetchSongs:je,removeAlert:ye,searchSongs:function(e,t){return function(){var n=Object(oe.a)(ce.a.mark((function n(s){var r,i;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,de.get("/search-title/".concat(e,"/"));case 3:if(r=n.sent,!t){n.next=11;break}return n.next=7,de.get("/search-lyrics/".concat(e,"/"));case 7:i=n.sent,s({type:v,payload:[].concat(Object(_.a)(r.data),Object(_.a)(i.data))}),n.next=12;break;case 11:s({type:v,payload:r.data});case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),X(n.t0,s);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}()},findId:function(e){return function(){var t=Object(oe.a)(ce.a.mark((function t(n){var s;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.get("/songs/".concat(e,"/?format=json"));case 3:s=t.sent,n({type:f,payload:s.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&404===t.t0.response.status?n({type:O}):X(t.t0,n);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},addToPlaylist:me,removeFromPlaylist:Oe,playlistNext:fe,stopPlaylist:ve,cancelSearch:function(){return{type:g}},toggleVisibility:ge})(xe),Ne=n(397),Se=n(395),ze=n(393),we=n(394),Ce=n(396),Ie=Object(c.b)((function(e){return{alert:e.alert}}),{removeAlert:ye})((function(e){var t=e.alert.msg?Object(Z.jsx)(ze.a,{onClose:function(){e.removeAlert()},severity:e.alert.type,children:e.alert.msg}):null,n=Object(s.useState)(!1),r=Object(se.a)(n,2),i=r[0],a=r[1];return Object(Z.jsxs)(we.a,{onClose:function(){return a(!1)},onOpen:function(){return a(!0)},open:i,trigger:e.children,children:[Object(Z.jsx)(we.a.Header,{children:e.header}),Object(Z.jsx)(we.a.Content,{children:Object(Z.jsx)(we.a.Description,{children:e.content})}),Object(Z.jsxs)(we.a.Actions,{children:[Object(Z.jsx)("div",{className:"centered",children:t}),Object(Z.jsx)(Ce.a,{onClick:function(){return a(!1)},children:e.closeText}),Object(Z.jsx)(Ce.a,{content:e.approveText,onClick:function(){e.onApprove()},negative:!0})]})]})})),Ve=function(e){var t=e.input,n=e.label,s=e.meta,r=e.type,i=e.disabled,a=e.wide,c=e.tip;return Object(Z.jsxs)("div",{className:"".concat(a," field ").concat(s.error&&s.touched?"error":""),children:[Object(Z.jsx)("label",{children:n}),Object(Z.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:r,autoComplete:"off",disabled:i,"data-tip":c})),Te(s)]})},Ae=function(e){var t=e.input,n=e.label,s=e.meta,r=e.tip;return Object(Z.jsxs)("div",{className:"field ".concat(s.error&&s.touched?"error":""),children:[Object(Z.jsx)("label",{children:n}),Object(Z.jsx)("textarea",Object(j.a)(Object(j.a)({},t),{},{autoComplete:"off","data-tip":r})),Te(s)]})},Te=function(e){var t=e.error;if(e.touched&&t)return Object(Z.jsx)("div",{className:"ui error message",children:Object(Z.jsx)("div",{className:"header",children:t})})},Me=Object(Se.a)({form:"songForm",validate:function(e){var t={};return e.id||(t.id="Add meg az \xe9nek sorsz\xe1m\xe1t!"),e.title||(t.title="Add meg az \xe9nek c\xedm\xe9t!"),e.lyrics||(t.lyrics="Add meg a dalsz\xf6veget!"),t}})((function(e){return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("form",{className:"ui form error",onSubmit:e.handleSubmit((function(t){e.onSubmit(t)})),children:[Object(Z.jsx)($,{}),Object(Z.jsxs)("div",{className:"fields",children:[Object(Z.jsx)(Ne.a,{wide:"three wide",tip:"Az \xe9nek sorsz\xe1ma. Egyedi, k\xe9s\u0151bb nem v\xe1ltoztathat\xf3",name:"id",component:Ve,label:"Sorsz\xe1m",type:"number",props:{disabled:e.edit}}),Object(Z.jsx)(Ne.a,{wide:"thirteen wide",name:"title",component:Ve,label:"C\xedm",type:"text"})]}),Object(Z.jsx)(Ne.a,{tip:"Az alkalmaz\xe1s dupla sork\xf6z\xf6kn\xe9l bontja versszakokra a sz\xf6veget.",name:"lyrics",component:Ae,label:"Dalsz\xf6veg"}),e.edit?Object(Z.jsxs)("div",{className:"ui segment",children:[Object(Z.jsxs)("div",{className:"ui two column very relaxed grid",children:[Object(Z.jsxs)("div",{className:"column",children:[Object(Z.jsx)("button",{className:"ui button primary ".concat(W.isMobileOnly?"my-bigger-button":""),children:"Ment\xe9s"}),Object(Z.jsx)(J.a,{to:"/dicsi/songs/".concat(e.id),className:"ui button grey ".concat(W.isMobileOnly?"my-bigger-button":""),children:"M\xe9gse"})]}),Object(Z.jsx)("div",{className:"column jobbra",children:Object(Z.jsx)(Ie,{header:"Biztosan t\xf6rl\xf6d ezt az \xe9neket?",content:"Biztosan t\xf6rl\xf6d a(z) ".concat(e.initialValues.title," \xe9neket? Ezt k\xe9s\u0151bb nem tudod visszavonni!"),closeText:"M\xe9gse",approveText:"T\xf6rl\xe9s",onApprove:e.onDeleteClick,children:Object(Z.jsx)("button",{type:"button",className:"ui button negative ".concat(W.isMobileOnly?"my-bigger-button":""),children:"\xc9nek t\xf6rl\xe9se"})})})]}),Object(Z.jsx)("div",{className:"ui vertical divider",children:"vagy"})]}):Object(Z.jsx)("button",{className:"ui button primary",children:"Ment\xe9s"})]}),e.children]})})),Ee=function(e){Object(Y.a)(n,e);var t=Object(U.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSongs(),this.props.stopPlaylist(),this.props.plVisible&&this.props.toggleVisibility()}},{key:"render",value:function(){return this.props.biggestID>0?Object(Z.jsxs)("div",{className:"ui container",children:[Object(Z.jsx)("h2",{className:"ui header",children:"\xdaj \xe9nek felv\xe9tele"}),Object(Z.jsx)(Me,{onSubmit:this.props.createSong,initialValues:{id:this.props.biggestID+1}})]}):Object(Z.jsx)(ne,{})}}]),n}(r.a.Component),Le=Object(c.b)((function(e){return{plVisible:e.playlist.visible,biggestID:Math.max.apply(Math,Object(_.a)(Object.values(e.songs).map((function(e){return e.id}))))}}),{createSong:function(e){return function(){var t=Object(oe.a)(ce.a.mark((function t(n,s){var r;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,de.post("/songs/",{id:parseInt(e.id),title:e.title,lyrics:e.lyrics.split("\n\n").join("###")},{headers:{Authorization:"Token ".concat(s().auth.token)}});case 3:r=t.sent,n({type:x,payload:r.data}),pe.push("/dicsi/songs/".concat(e.id)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response),X(t.t0,n);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}()},stopPlaylist:ve,toggleVisibility:ge,fetchSongs:je})(Ee),Pe=function(e){Object(Y.a)(n,e);var t=Object(U.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSong(this.props.match.params.id),this.props.stopPlaylist(),this.props.plVisible&&this.props.toggleVisibility()}},{key:"render",value:function(){var e=this;if(!this.props.song)return Object(Z.jsx)(ne,{});var t=this.props.song;return Object(Z.jsxs)("div",{className:"ui container",children:[Object(Z.jsx)("h2",{className:"ui header",children:"\xc9nek szerkeszt\xe9se"}),Object(Z.jsx)(Me,{onSubmit:function(t){return e.props.editSong(e.props.match.params.id,t)},initialValues:{id:t.id,title:t.title,lyrics:t.verses.join("\n\n")},edit:!0,id:t.id,onDeleteClick:function(){return e.props.deleteSong(e.props.match.params.id)}})]})}}]),n}(r.a.Component),_e=Object(c.b)((function(e,t){return{song:e.songs[t.match.params.id],plVisible:e.playlist.visible}}),{editSong:function(e,t){return function(){var n=Object(oe.a)(ce.a.mark((function n(s,r){var i;return ce.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,de.patch("/songs/".concat(e,"/"),{title:t.title,lyrics:t.lyrics.split("\n\n").join("###")},{headers:{Authorization:"Token ".concat(r().auth.token)}});case 3:i=n.sent,s({type:k,payload:i.data}),pe.push("/dicsi/songs/".concat(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),X(n.t0,s);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()},fetchSong:be,stopPlaylist:ve,toggleVisibility:ge,deleteSong:he})(Pe),Be=18,De=function(e){Object(Y.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(K.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={fontSize:Be,deleteModalActive:!1,deletePassword:"",oneVerseModeActive:!1,currentVerse:0,showButtons:!W.isMobileOnly,twoColumnMode:!1},e.handleKeyDown=function(t){switch(t.code){case"ArrowRight":e.handleVerseChange(!0);break;case"ArrowLeft":e.handleVerseChange(!1)}},e.onSizeChange=function(t){t&&e.state.fontSize<70?e.setState({fontSize:e.state.fontSize+3}):!t&&e.state.fontSize>8&&e.setState({fontSize:e.state.fontSize-3})},e.handleModeSwitch=function(){e.state.oneVerseModeActive?e.setState({oneVerseModeActive:!1,fontSize:Be}):e.setState({oneVerseModeActive:!0,fontSize:60})},e.handleVerseChange=function(t){t?e.setState({currentVerse:(e.state.currentVerse+1)%e.props.song.verses.length}):0===e.state.currentVerse?e.setState({currentVerse:e.props.song.verses.length-1}):e.setState({currentVerse:(e.state.currentVerse-1)%e.props.song.verses.length})},e.handleFontSizeReset=function(){e.state.oneVerseModeActive?e.setState({fontSize:60}):e.setState({fontSize:Be})},e.onPlaylistAdd=function(){e.props.addToPlaylist(parseInt(e.props.match.params.id)),e.props.plVisible||e.props.toggleVisibility()},e.renderLine=function(e,t){return Object(Z.jsxs)(r.a.Fragment,{children:[e,Object(Z.jsx)("br",{})]},t)},e.renderVerse=function(t,n){var s=t.split("\n").map((function(t,n){return e.renderLine(t,n)}));return Object(Z.jsx)("p",{style:{fontSize:"".concat(e.state.fontSize,"px")},children:s},n)},e.renderVerses=function(){if(!e.state.oneVerseModeActive){if(e.state.twoColumnMode){var t=e.props.song.verses.map((function(t,n){return n+1<=Math.ceil(e.props.song.verses.length/2)?e.renderVerse(t,n):null})),n=e.props.song.verses.map((function(t,n){return n+1>Math.ceil(e.props.song.verses.length/2)?e.renderVerse(t,n):null}));return Object(Z.jsxs)("div",{className:"ui container grid",children:[Object(Z.jsx)("div",{className:"eight wide column",children:t}),Object(Z.jsx)("div",{className:"eight wide column",children:n})]})}return Object(Z.jsxs)("div",{className:"ui container",children:[" ",e.props.song.verses.map((function(t,n){return e.renderVerse(t,n)}))]})}if(!e.props.song.verses[e.state.currentVerse])return Object(Z.jsx)(ne,{});var s=e.props.song.verses[e.state.currentVerse].split("\n").map((function(t,n){return e.renderLine(t,n)}));return Object(Z.jsx)("div",{children:Object(Z.jsx)("p",{style:{fontSize:"".concat(e.state.fontSize,"px")},children:s})})},e.renderButtons=function(){var t=e.props.signedIn?Object(Z.jsx)(J.a,{"data-tip":"\xc9nek szerkezt\xe9se vagy t\xf6rl\xe9se",className:"ui button my-button icon yellow",to:"/dicsi/songs/edit/".concat(e.props.match.params.id),children:Object(Z.jsx)("i",{className:"icon edit"})}):null,n=!W.isMobileOnly&&e.state.showButtons?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(ie,{tip:"El\u0151z\u0151 versszak",disabled:!e.state.oneVerseModeActive,color:"teal",onClick:function(){return e.handleVerseChange(!1)},icons:[" step backward icon"]}),Object(Z.jsx)(ie,{tip:"Egyversszak m\xf3d be- \xe9s kikapcsol\xe1sa",color:"green",onClick:e.handleModeSwitch,icons:["play"]}),Object(Z.jsx)(ie,{tip:"K\xf6vetkez\u0151 vesszak",disabled:!e.state.oneVerseModeActive,color:"teal",onClick:function(){return e.handleVerseChange(!0)},icons:[" step forward icon"]})]}):null,s=e.state.showButtons?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)(J.a,{"data-tip":"Vissza a keres\xe9shez",className:"ui button my-button icon grey",to:"/dicsi/",children:Object(Z.jsx)("i",{className:"icon search"})}),t,Object(Z.jsx)(ie,{tip:"".concat(e.state.twoColumnMode?"Egy":"K\xe9t"," has\xe1b"),color:"primary",onClick:function(){return e.setState({twoColumnMode:!e.state.twoColumnMode})},disabled:e.state.oneVerseModeActive,icons:["".concat(e.state.twoColumnMode?"align justify":"columns")]}),Object(Z.jsx)(ie,{tip:"Bet\u0171m\xe9ret cs\xf6kkent\xe9se",color:"primary",onClick:function(){return e.onSizeChange(!1)},icons:["font","arrow down"]}),Object(Z.jsx)(ie,{tip:"Bet\u0171m\xe9ret n\xf6vel\xe9se",color:"primary",onClick:function(){return e.onSizeChange(!0)},icons:["font","arrow up "]}),Object(Z.jsx)(ie,{tip:"Bet\u0171m\xe9ret vissza\xe1ll\xedt\xe1sa",color:"primary",onClick:e.handleFontSizeReset,icons:["font","undo"]}),Object(Z.jsx)(ie,{tip:"Hozz\xe1ad\xe1s a lej\xe1tsz\xe1si list\xe1hoz",color:"green",onClick:e.onPlaylistAdd,icons:["plus"]}),Object(Z.jsx)(ie,{color:"green",onClick:e.props.toggleVisibility,icons:["play circle"],text:" Lej\xe1tsz\xe1si lista"})]}):null;return Object(Z.jsxs)(Z.Fragment,{children:[s,n]})},e.renderTitle=function(){return W.isMobileOnly?Object(Z.jsxs)(Z.Fragment,{children:[e.renderButtons(),Object(Z.jsxs)("div",{className:"right-left",children:[Object(Z.jsxs)("h2",{className:"vert-centered",children:[e.props.song.id,". ",e.props.song.title," "]}),Object(Z.jsx)(ie,{color:"gray",onClick:function(){return e.setState({showButtons:!e.state.showButtons})},icons:["bars"],tip:"Gombok elrejt\xe9se/el\u0151hoz\xe1sa"})]}),Object(Z.jsx)("div",{className:"ui divider"})]}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("div",{className:"right-left m-top",children:[Object(Z.jsxs)("h2",{className:"vert-centered",children:[e.props.song.id,". ",e.props.song.title," "]}),Object(Z.jsx)("h2",{className:"vert-centered",children:e.state.oneVerseModeActive?"".concat(e.state.currentVerse+1,"/").concat(e.props.song.verses.length):""}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(ie,{color:"gray",onClick:function(){return e.setState({showButtons:!e.state.showButtons})},icons:["bars"],tip:"Gombok elrejt\xe9se/el\u0151hoz\xe1sa"}),e.renderButtons()]})]}),Object(Z.jsx)("div",{className:"ui divider"})]})},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.removeAlert(),this.props.fetchSong(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){e.song&&e.song.id!==this.props.song.id&&this.setState({currentVerse:0})}},{key:"render",value:function(){return this.props.song?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)($,{}),Object(Z.jsx)("div",{className:"ui container",onKeyDown:this.handleKeyDown,children:Object(Z.jsxs)("div",{className:"full-screen",children:[this.renderTitle(),this.renderVerses()]})})]}):Object(Z.jsx)(ne,{})}}]),n}(r.a.Component),Fe=Object(c.b)((function(e,t){return{song:e.songs[t.match.params.id],plVisible:e.playlist.visible,signedIn:e.auth.signedIn}}),{fetchSong:be,deleteSong:he,removeAlert:ye,addToPlaylist:me,toggleVisibility:ge})(De),Ge=function(e){var t=e.input,n=e.label,s=e.meta,r=e.type;return Object(Z.jsxs)("div",{className:"field ".concat(s.error&&s.touched?"error":""),children:[Object(Z.jsx)("label",{children:n}),Object(Z.jsx)("input",Object(j.a)(Object(j.a)({},t),{},{type:r,autoComplete:"off"})),Re(s)]})},Re=function(e){var t=e.error;if(e.touched&&t)return Object(Z.jsx)("div",{className:"ui error message",children:Object(Z.jsx)("div",{className:"header",children:t})})},Ke=Object(Se.a)({form:"authForm",validate:function(e){var t={};return e.username||(t.username="Add meg a felhaszn\xe1l\xf3nevet!"),e.password||(t.password="Add meg a jelsz\xf3t!"),t}})(Object(c.b)(null,{login:function(e){var t=e.username,n=e.password;return function(){var e=Object(oe.a)(ce.a.mark((function e(s){var r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.post("/api-token-auth/",{username:t,password:n});case 3:r=e.sent,s({type:L,payload:r.data.token}),pe.goBack(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),X(e.t0,s);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(Z.jsx)("div",{className:"ui container",children:Object(Z.jsxs)("form",{className:"ui form error",onSubmit:e.handleSubmit((function(t){e.login(t)})),children:[Object(Z.jsx)(Ne.a,{name:"username",component:Ge,label:"Felhaszn\xe1l\xf3n\xe9v",type:"text"}),Object(Z.jsx)(Ne.a,{name:"password",component:Ge,label:"Jelsz\xf3",type:"password"}),Object(Z.jsx)("button",{className:"ui button primary",children:"Bejelentkez\xe9s"})]})})}))),He=Object(c.b)((function(e){return{signedIn:e.auth.signedIn}}),{logout:function(){return{type:P}}})((function(e){var t=e.signedIn?Object(Z.jsx)(J.a,{className:"header-link",onClick:function(){return e.logout()},children:"Kijelentkez\xe9s"}):Object(Z.jsx)(J.a,{to:"/dicsi/login",className:"header-link centered-text",children:"Admin bejelentkez\xe9s"});return Object(Z.jsxs)("div",{className:"footer-container centered-container two-column small-text",children:[Object(Z.jsxs)("p",{className:"centered-text",children:["K\xe9sz\xedtette: Fekete S\xe1muel\xa0",Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/Tschonti/dicsi-frontend",children:Object(Z.jsx)("i",{"aria-label":"Forr\xe1sk\xf3d a Github-on",className:"icon github"})}),Object(Z.jsx)("br",{}),"\xa0az\xa0",Object(Z.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://okgy.hu/",children:"\xd6r\xf6mh\xedr Kereszt\xe9ny Gy\xfclekezet"})," sz\xe1m\xe1ra"]}),t]})})),Ye=Object(c.b)((function(e){return{alert:e.alert,signedIn:e.auth.signedIn}}),{removeAlert:ye})((function(e){var t=e.alert.msg?Object(Z.jsx)(ze.a,{onClose:function(){e.removeAlert()},severity:e.alert.type,children:e.alert.msg}):null,n=W.isMobileOnly?Object(Z.jsx)("div",{className:"big-text-nom",children:"\xd6KGY \xc9nekesk\xf6nyv"}):Object(Z.jsx)("h2",{children:"\xd6KGY \xc9nekesk\xf6nyv"}),s=e.signedIn?Object(Z.jsx)(J.a,{to:"/dicsi/songs/new",className:"item header-link",children:"\xdaj \xe9nek"}):null;return Object(Z.jsxs)("div",{className:"ui secondary pointing menu my-header",children:[Object(Z.jsx)(J.a,{to:"/dicsi",className:"item ",children:n}),Object(Z.jsx)(J.a,{to:"/dicsi",className:"item header-link",children:"\xc9nekek list\xe1ja"}),s,Object(Z.jsx)("div",{className:"centered",children:t})]})})),Ue=function(e){Object(Y.a)(n,e);var t=Object(U.a)(n);function n(){var e;Object(K.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={open:!0},e.renderSong=function(t,n){var s=0===n,r=n===e.props.playlist.list.length-1;return Object(Z.jsx)("div",{className:"item my-item ".concat(e.props.playlist.currentIndex===n?"active":""),children:Object(Z.jsxs)("h5",{className:"header",children:[Object(Z.jsx)("i",{className:"".concat(s?"grey":"pointer"," icon caret up bigger-icon"),onClick:function(){return e.props.moveInPlaylist(n,!0)}}),Object(Z.jsx)("i",{className:"".concat(r?"grey":"pointer"," icon caret down bigger-icon"),onClick:function(){return e.props.moveInPlaylist(n,!1)}}),Object(Z.jsxs)(J.a,{to:"/dicsi/songs/".concat(t.id),className:"notLinkStyle pointer",children:[t.id,". ",t.title]}),Object(Z.jsx)("div",{className:"right floated",children:Object(Z.jsx)("i",{className:"icon minus circle red pointer",onClick:function(){return e.props.removeFromPlaylist(t.id)}})})]})},n)},e.renderSongList=function(){if(h.a.isEmpty(e.props.songs)||!e.state.open)return null;var t=e.props.playlist.list.map((function(t,n){var s=e.props.songs.find((function(e){return e.id===t}));return s?e.renderSong(s,n):null})),n=t.length>0?"":Object(Z.jsx)("p",{className:"centered-text",children:"A lej\xe1tsz\xe1si lista \xfcres"});return Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("div",{className:"ui relaxed divided ordered list",children:t}),n]})},e.onClear=function(){e.props.clearPlaylist(),e.props.toggleVisibility()},e.onClose=function(t){e.props.toggleVisibility(),t.stopPropagation()},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSongs()}},{key:"render",value:function(){var e=this;if(!this.props.playlist.visible)return null;var t=0===this.props.playlist.list.length?0:this.props.playlist.currentIndex+1,n=this.state.open?Object(Z.jsxs)("div",{className:"right-left pointer",onClick:function(){return e.setState({open:!e.state.open})},children:[Object(Z.jsx)("i",{className:"icon ".concat(this.state.open?"minus":"plus")}),Object(Z.jsx)("i",{className:"red icon close",onClick:this.onClose})]}):null;return Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:"playlist-container",children:[Object(Z.jsx)($,{}),Object(Z.jsxs)("div",{className:"right-left pointer",onClick:function(){return e.setState({open:!e.state.open})},children:[Object(Z.jsxs)("h3",{children:["Lej\xe1tsz\xe1si lista ","".concat(t,"/").concat(this.props.playlist.list.length)]}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("i",{className:"icon ".concat(this.state.open?"minus":"plus")}),"\xa0\xa0",Object(Z.jsx)("i",{className:"red icon close",onClick:this.onClose})]})]}),Object(Z.jsxs)("div",{className:"centered-container",children:[Object(Z.jsx)(Ie,{header:"Biztosan t\xf6rl\xf6d a lej\xe1tsz\xe1si list\xe1t?",content:"Biztosan t\xf6rl\xf6d a lej\xe1tsz\xe1si list\xe1t? Ezt k\xe9s\u0151bb nem tudod visszavonni!",closeText:"M\xe9gse",approveText:"T\xf6rl\xe9s",onApprove:this.onClear,children:Object(Z.jsx)(ie,{disabled:0===this.props.playlist.list.length,tip:"Lej\xe1tsz\xe1si lista t\xf6rl\xe9se",color:"negative",icons:["trash alternate"]})}),Object(Z.jsx)(ie,{disabled:!this.props.playlist.active,tip:"El\u0151z\u0151 \xe9nek",color:"blue",onClick:function(){return e.props.playlistNext(!1,e.props.playlist)},icons:["backward"]}),Object(Z.jsx)(ie,{disabled:this.props.playlist.active||0===this.props.playlist.list.length,tip:"Lej\xe1tsz\xe1si lista ind\xedt\xe1sa",color:"green",onClick:function(){return e.props.startPlaylist(e.props.playlist)},icons:["play"]}),Object(Z.jsx)(ie,{disabled:!this.props.playlist.active,tip:"K\xf6vetkez\u0151 \xe9nek",color:"blue",onClick:function(){return e.props.playlistNext(!0,e.props.playlist)},icons:["forward"]})]}),this.renderSongList(),n]})})}}]),n}(r.a.Component),We=Object(c.b)((function(e){return{songs:Object.values(e.songs),playlist:e.playlist}}),{fetchSongs:je,playlistNext:fe,startPlaylist:function(e){return pe.push("/dicsi/songs/".concat(e.list[e.currentIndex])),{type:V}},clearPlaylist:function(){return{type:T}},removeFromPlaylist:Oe,toggleVisibility:ge,moveInPlaylist:function(e,t){return{type:E,payload:{index:e,up:t}}}})(Ue),Je=function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)(R.b,{history:pe,children:[Object(Z.jsx)(Ye,{}),Object(Z.jsxs)(R.c,{children:[Object(Z.jsx)(R.a,{path:"/dicsi/",exact:!0,component:ke}),Object(Z.jsx)(R.a,{path:"/dicsi/songs/new",exact:!0,component:Le}),Object(Z.jsx)(R.a,{path:"/dicsi/songs/edit/:id",exact:!0,component:_e}),Object(Z.jsx)(R.a,{path:"/dicsi/songs/:id",exact:!0,component:Fe}),Object(Z.jsx)(R.a,{path:"/dicsi/login",exact:!0,component:Ke})]}),Object(Z.jsx)(He,{}),Object(Z.jsx)(We,{})]})})},Xe=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d)(Object(o.a)(Object(d.save)({states:["playlist"],debounce:500}),l.a))(o.e)(G,Object(d.load)({states:["playlist"]}));a.a.render(Object(Z.jsx)(c.a,{store:Xe,children:Object(Z.jsx)(Je,{})}),document.getElementById("root"))},76:function(e,t,n){}},[[361,1,2]]]);
//# sourceMappingURL=main.81a69a5a.chunk.js.map