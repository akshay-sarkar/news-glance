(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,a){e.exports=a(394)},214:function(e,t,a){},216:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(24),r=a.n(i),s=(a(214),a(17)),l=a(18),c=a(20),u=a(19),h=a(21),d=a(22),m=a(397),p=a(399),g=a(398),f=a(396),b=(a(216),a(10)),w=a(63),y=a.n(w),v=a(5),E=a(142),k=a.n(E),S=a(42),j=a(32),O=a(93),T=a.n(O);a(226);T.a.initializeApp({apiKey:"AIzaSyBSQ0SchiukUFpEb4zp_85yBKxZ5rYDR2c",authDomain:"lets-read-news.firebaseapp.com",databaseURL:"https://lets-read-news.firebaseio.com",projectId:"lets-read-news",storageBucket:"lets-read-news.appspot.com",messagingSenderId:"1025448345928"});var C=T.a.auth(),A={email:"",password:"",confirmPassword:"",error:null,success:null},F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.sendEmail=function(e){a.setState({success:"An email is sent for verification."}),e.user.sendEmailVerification().then(function(){console.log("email verification sent to user")}).catch(function(e){console.log("failure"),a.setState({error:e})})},a.state=Object(S.a)({open:!1},A),a.signup=a.signup.bind(Object(j.a)(Object(j.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"signup",value:function(e){var t=this,a=this.state,n=a.email,o=a.password;C.createUserWithEmailAndPassword(n,o).then(function(e){console.log("sucess",e),t.setState(Object(S.a)({},A)),e&&!1===e.user.emailVerified&&t.sendEmail(e)}).catch(function(e){console.log("faliure"),t.setState({error:e})}),e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.email,n=t.password,i=t.confirmPassword,r=t.error,s=t.success,l=n!==i||""===n||""===a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{size:"small",onClick:this.handleOpen,className:e.btnStyling},"Sign up"),o.a.createElement(v.b,{"aria-labelledby":"auth-modal-title",open:this.state.open,onClose:this.handleClose},o.a.createElement(v.f,{id:"form-dialog-title"},"Sign Up"),o.a.createElement("form",{autoComplete:"on",onSubmit:this.signup},o.a.createElement(v.d,null,o.a.createElement(v.e,null,"Signup to create customize news feed."),o.a.createElement(v.j,{required:!0,id:"email-address-input",label:"Email Address",className:e.textField,margin:"normal",value:a,onChange:this.handleChange("email"),fullWidth:!0}),o.a.createElement(v.j,{required:!0,id:"password-input",label:"Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:n,onChange:this.handleChange("password")}),o.a.createElement(v.j,{required:!0,id:"confirm-password-input",label:" Confirm Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:i,onChange:this.handleChange("confirmPassword")})),o.a.createElement(v.c,null,o.a.createElement(v.a,{onClick:this.handleClose,color:"primary"}," Cancel "),o.a.createElement(v.a,{color:"primary",disabled:l,type:"submit"}," SignUp ")),r&&o.a.createElement("p",null,r.message),s&&o.a.createElement("p",null,s.message))))}}]),t}(n.Component),x=Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},btnStyling:Object(d.a)({color:"#FFFFFF",fontSize:"1rem"},e.breakpoints.up("md"),{color:"rgba(0, 0, 0, 0.87)",fontSize:"0.8125rem"})}},{withTheme:!0})(F),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleLogout=function(){C.signOut().then(function(e){console.log("sucess",e)}).catch(function(e){console.log("error",e)})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{variant:"outlined",size:"small",onClick:this.handleLogout,className:e.btnStyling},"Logout"))}}]),t}(n.Component),D=Object(b.withStyles)(function(e){return{btnStyling:Object(d.a)({color:"#FFFFFF",fontSize:"1rem"},e.breakpoints.up("md"),{color:"rgba(0, 0, 0, 0.87)",fontSize:"0.8125rem"})}},{withTheme:!0})(N),I={email:"",password:"",error:null,success:null},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.signin=function(e){var t=a.state,n=t.email,o=t.password;C.signInWithEmailAndPassword(n,o).then(function(e){console.log("sucess",e),a.setState(Object(S.a)({},I))}).catch(function(e){console.log("faliure"),a.setState({error:e})}),e.preventDefault()},a.state=Object(S.a)({open:!1},I),a.signin=a.signin.bind(Object(j.a)(Object(j.a)(a))),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.email,n=t.password,i=t.error,r=t.success,s=""===n||""===a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{size:"small",onClick:this.handleOpen,className:e.btnStyling},"Sign In"),o.a.createElement(v.b,{"aria-labelledby":"auth-modal-title",open:this.state.open,onClose:this.handleClose},o.a.createElement(v.f,{id:"form-dialog-title"},"Sign In"),o.a.createElement("form",{autoComplete:"on",onSubmit:this.signin},o.a.createElement(v.d,null,o.a.createElement(v.e,null,"SignIn to read your customize news feed."),o.a.createElement(v.j,{required:!0,id:"email-address-input",label:"Email Address",className:e.textField,margin:"normal",value:a,onChange:this.handleChange("email"),fullWidth:!0}),o.a.createElement(v.j,{required:!0,id:"password-input",label:"Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:n,onChange:this.handleChange("password")})),o.a.createElement(v.c,null,o.a.createElement(v.a,{onClick:this.handleClose,color:"primary"}," Cancel "),o.a.createElement(v.a,{color:"primary",disabled:s,type:"submit"}," SignIn ")),i&&o.a.createElement("p",null,i.message),r&&o.a.createElement("p",null,r.message))))}}]),t}(n.Component),B=Object(b.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},btnStyling:Object(d.a)({color:"#FFFFFF",fontSize:"1rem"},e.breakpoints.up("md"),{color:"rgba(0, 0, 0, 0.87)",fontSize:"0.8125rem"})}},{withTheme:!0})(M),P=o.a.createContext(),W=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={age:100,userData:null,newsData:{Headlines:[],Business:[],Technology:[],Sports:[],Entertainment:[],Science:[],Health:[]},sections:["Headlines","Business","Technology","Sports","Entertainment","Science","Health"]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(P.Provider,{value:{state:this.state,updateNewsData:function(t,a){var n=Object.assign({},e.state.newsData);n[t]=a,e.setState({obj:n})},growAYearOlder:function(){return e.setState({age:e.state.age+1})},updateUserData:function(t){return e.setState({userData:t})}}},this.props.children)}}]),t}(n.Component),z=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.onAuthStateChanged(function(t){t?(console.log(e.context),e.context.updateUserData(t),console.log("user is set state..")):(e.context.updateUserData(null),console.log("not authorized"))})}},{key:"showSettings",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(P.Consumer,null,function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.sectionDesktop},o.a.createElement(v.k,{className:e.toolbarMain},o.a.createElement(v.a,{size:"small"},"Subscribe"),o.a.createElement(v.l,{variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle}," NEWS GLANCE "),o.a.createElement(v.g,null,o.a.createElement(k.a,null)),t.state.userData?o.a.createElement(D,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),o.a.createElement(B,null)))),o.a.createElement("div",{className:e.sectionMobile},o.a.createElement(v.k,{className:e.toolbarMain},o.a.createElement(v.l,{variant:"h5",color:"inherit",align:"right",noWrap:!0,className:e.toolbarTitle}," NEWS GLANCE "))))})}}]),t}(n.Component);z.contextType=P;var L=Object(b.withStyles)(function(e){return{root:{flexGrow:1},toolbarMain:{borderBottom:"1px solid black"},toolbarTitle:{flex:1},sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"inherit"}),sectionMobile:Object(d.a)({display:"inherit"},e.breakpoints.up("md"),{display:"none"})}})(z),H=a(143),G=a(64),R=a.n(G),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOpenSignUp=function(){a.setState({isOpen:!1})},a.handleOpenSignIn=function(){a.setState({isOpen:!1})},a.state={open:!1,isOpen:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;this.props.classes;return o.a.createElement("div",null,o.a.createElement(P.Consumer,null,function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H.slide,{isOpen:!1},o.a.createElement(v.h,{component:"nav"},null===t.state.userData?o.a.createElement(v.i,{button:!0,onClick:e.handleOpenSignUp},o.a.createElement(x,null)):"",null===t.state.userData?o.a.createElement(v.i,{button:!0,divider:!0,onClick:e.handleOpenSignUp},o.a.createElement(B,null)):o.a.createElement(v.i,{button:!0,divider:!0,onClick:e.handleOpenSignUp},o.a.createElement(D,null)),o.a.createElement("hr",null),t.state.sections.map(function(t,a){return o.a.createElement(v.i,{button:!0,divider:!0,key:t,onClick:e.handleOpenSignUp},o.a.createElement(R.a,{to:"/"+t,className:"menu-item",key:t},o.a.createElement(v.l,{style:{color:"#FFFFFF",fontSize:"1em"},key:t},t)))}))))}))}}]),t}(n.Component),_=Object(b.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}},{withTheme:!0})(U),Z=a(49),K=a.n(Z),J=a(58),q=a.n(J),V=a(59),Y=a.n(V),Q=a(62),X=a.n(Q),$=a(61),ee=a.n($),te=a(60),ae=a.n(te),ne=a(41),oe=a.n(ne),ie=a(34),re=a.n(ie),se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).openUrl=function(e){window.open(e,"_blank")},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.article,n=t.classes;return o.a.createElement(q.a,{className:n.card},o.a.createElement(Y.a,null,o.a.createElement(ae.a,{component:"img",alt:a.title,className:n.media,height:"150",image:a.urlToImage,title:a.title}),o.a.createElement(ee.a,null,o.a.createElement(re.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.title),o.a.createElement(re.a,{component:"p"},a.description))),o.a.createElement(X.a,null,o.a.createElement(oe.a,{size:"small",color:"primary",onClick:function(){return e.openUrl(a.url)}},"Learn More")))}}]),t}(n.Component),le=Object(b.withStyles)({card:{maxWidth:"345vw",transitionDuration:"0.3s",height:"auto"},media:{objectFit:"cover",marginTop:"30"}})(se),ce=a(94),ue=a.n(ce),he=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={newsData:[],isLoading:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getArticles()}},{key:"getArticles",value:function(){var e=window.location.href.split("/"),t=e[e.length-1];"Headlines"===t&&(t=""),this.setState({newsData:ue.a.articles,isLoading:!0}),console.log(ue.a.articles)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},this.state.isLoading?o.a.createElement("div",null,o.a.createElement(K.a,{container:!0,spacing:24,direction:"row",justify:"space-evenly",alignItems:"flex-start"},this.state.newsData.map(function(t){return o.a.createElement(K.a,{item:!0,key:t.publishedAt,xs:12,sm:6,md:4,className:e.paper},o.a.createElement(le,{article:t}))}))):"No News found")}}]),t}(n.Component),de=Object(b.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(he),me=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,mobileMoreAnchorEl:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.sections;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.k,{variant:"dense",className:t.toolbarSecondary},o.a.createElement("div",{className:t.sectionDesktop},a.map(function(e){return o.a.createElement(R.a,{to:e,className:t.linkDecoration,key:e},o.a.createElement(v.l,{color:"inherit",noWrap:!0,key:e},e))}))))}}]),t}(n.Component),pe=Object(b.withStyles)(function(e){return{toolbarSecondary:{justifyContent:"space-between"},linkDecoration:{textDecoration:"none",color:"black"},root:{width:"100%"},grow:{flexGrow:1},inputRoot:{color:"inherit",width:"100%"},sectionDesktop:Object(d.a)({display:"none"},e.breakpoints.up("md"),{display:"contents"})}})(me),ge=Object(b.createMuiTheme)({typography:{useNextVariants:!0}}),fe=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(W,null,o.a.createElement(b.MuiThemeProvider,{theme:ge},o.a.createElement("div",{className:"App"},o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,null),o.a.createElement(m.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:e.sectionMobile},o.a.createElement(_,null)),o.a.createElement("div",{className:e.layout},o.a.createElement(L,null),o.a.createElement(P.Consumer,null,function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(pe,{sections:e.state.sections}),o.a.createElement(p.a,null,e.state.sections.map(function(e,t){return o.a.createElement(g.a,{path:"/"+e,component:function(e){return o.a.createElement(de,null)},key:t})}),o.a.createElement(g.a,null,o.a.createElement(f.a,{to:"/Headlines",path:"/"}))))}))))))))}}]),t}(n.Component),be=Object(b.withStyles)(function(e){return{layout:Object(d.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),sectionMobile:Object(d.a)({display:"inherit"},e.breakpoints.up("md"),{display:"none"})}})(fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},94:function(e,t){e.exports={status:"ok",totalResults:20,articles:[{source:{id:null,name:"Philly.com"},author:"FOSTER KLUG, HYUNG-JIN KIM",title:"North Korea tests new weapon amid stalled nuclear diplomacy",description:"North Korea tests 'newly developed ultramodern tactical weapon' amid stalled diplomatic efforts",url:"http://www2.philly.com/wires/ap/nkorea-says-it-has-tested-new-high-tech-tactical-weapon-20181115.html",urlToImage:"http://www2.philly.com/resizer/K22pqpNV2yxDH0LyLLs_qrLOYcI=/1200x0/center/middle/www2.philly.com/resizer/ugbL06PrVWtcQ1pX6Wq2fOdhZm0=/1200x0/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/S6IDM6B4OZGNDEBI4DFPHG4SRI.jpg",publishedAt:"2018-11-16T05:26:15Z",content:'SEOUL, South Korea (AP) \u2014 North Korean leader Kim Jong Un observed the successful test of an unspecified "newly developed ultramodern tactical weapon," state media reported Friday, in an apparent bid to apply pressure on the United States and South Korea. It \u2026 [+4090 chars]'},{source:{id:"the-washington-post",name:"The Washington Post"},author:"http://www.facebook.com/matt.zapotosky",title:"Julian Assange has been charged, prosecutors reveal inadvertently in court filing",description:"The WikiLeaks founder has long drawn the attention of federal investigators for revealing U.S. secrets.",url:"https://www.washingtonpost.com/world/national-security/julian-assange-has-been-charged-prosecutors-reveal-in-inadvertent-court-filing/2018/11/15/9902e6ba-98bd-48df-b447-3e2a4638f05a_story.html",urlToImage:"https://www.washingtonpost.com/resizer/ileXSm8zc2AllIMgJUL_6VSeSzM=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FHFGYZG5FUI6RNZSHRZMX4JR6I.jpg",publishedAt:"2018-11-16T04:59:00Z",content:"WikiLeaks founder Julian Assange has been charged under seal, prosecutors inadvertently revealed in a recently unsealed court filing \u2014 a development that could significantly advance the probe into Russian interference in the 2016 election and have major impli\u2026 [+5521 chars]"},{source:{id:"cnbc",name:"CNBC"},author:"Reuters",title:"Sterling gripped by Brexit crisis; yen enjoys safety bid",description:"The British pound remained fragile in early Asian trade on Friday after a tumultuous slide overnight for the currency on fears over Brexit.",url:"https://www.cnbc.com/2018/11/16/forex-markets-british-pound-brexit-yen-in-focus.html",urlToImage:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/02/12/104277475-GettyImages-631880238.1910x1000.jpg",publishedAt:"2018-11-16T04:48:53Z",content:"The British pound struggled to stay afloat in Asian trade on Friday having suffered a tumultuous slide overnight, as investors feared political turmoil in the country could see it crash out of the European Union without a divorce deal. Both the dollar and the\u2026 [+4131 chars]"},{source:{id:null,name:"Sbnation.com"},author:"Adam Stites",title:"4 winners and 3 losers from another Packers-Seahawks classic",description:"It was a good night for Seahawks running backs, but a bad showing for Mike McCarthy.",url:"https://www.sbnation.com/2018/11/15/18097988/packers-seahawks-kyler-fackrell-mike-mccarthy-russell-wilson",urlToImage:"https://cdn.vox-cdn.com/thumbor/UBMTt9V76d-eH5E0Ad2PqRq3fbQ=/0x0:4019x2104/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13447414/1062176298.jpg.jpg",publishedAt:"2018-11-16T04:44:55Z",content:"The Seattle Seahawks had their backs against the wall and playoff hopes on the line Thursday night. Then in the fourth quarter, they put together a 75-yard touchdown drive to steal a 27-24 win against the Green Bay Packers. Aaron Rodgers finished the night wi\u2026 [+6256 chars]"},{source:{id:"mashable",name:"Mashable"},author:"Johnny Lieu",title:"Jimmy Kimmel gets Michelle Obama to say stuff she couldn't in the White House",description:'"I\'ve never eaten a vegetable."',url:"https://mashable.com/video/michelle-obama-stuff-say/",urlToImage:"https://i.amz.mshcdn.com/_hAFUHmezakxpC4H04ibhgDznmQ=/1200x630/2018%2F11%2F16%2Fe0%2F2528071a8709451aa7b951c5d55d226c.0eb07.png",publishedAt:"2018-11-16T04:02:00Z",content:'Once upon a time, being in the White House required you to maintain a level of decorum. Now that Michelle Obama is out of there, the former First Lady can tell us about where she stole her phrase "they go low, we go high" from, and who her "freebie" is. It\'s \u2026 [+155 chars]'},{source:{id:"the-new-york-times",name:"The New York Times"},author:null,title:"Khmer Rouge's Slaughter in Cambodia Is Ruled a Genocide",description:"Four decades after the Communist movement\u2019s reign of terror, two surviving senior leaders are held accountable in a genocide verdict that opens the door for other rulings.",url:"https://www.nytimes.com/2018/11/15/world/asia/khmer-rouge-cambodia-genocide.html",urlToImage:"https://static01.nyt.com/images/2018/11/17/world/17khmer-genocide-1/17khmer-genocide-1-facebookJumbo.jpg",publishedAt:"2018-11-16T03:45:15Z",content:"The most consistent visitors to Pol Pot\u2019s burial grounds are casino staff, who come to burn fake money to ensure continued good luck for the gambling hall, the grave\u2019s caretaker said. Many ex-Khmer Rouge in Anlong Veng said they had no idea that a genocide ve\u2026 [+982 chars]"},{source:{id:"bloomberg",name:"Bloomberg"},author:null,title:"Whitaker Tells Graham That He Won't End Mueller's Probe, Source Says",description:null,url:"https://www.bloomberg.com/news/articles/2018-11-16/whitaker-said-to-tell-graham-that-he-won-t-end-mueller-s-probe",urlToImage:null,publishedAt:"2018-11-16T03:14:33Z",content:"To continue, please click the box below to let us know you're not a robot."},{source:{id:null,name:"Masslive.com"},author:"Noah R. Bombard | nbombard@masslive.com",title:"How much snow did we get? Snowfall totals for Nov. 15, 16 in Massachusetts",description:"A winter storm brought the first real snowfall to Massachusetts on Thursday, Nov. 15. Here are the most recent recorded snow totals from across the state as reported to the National Weather Service.",url:"https://www.masslive.com/weather/index.ssf/2018/11/how_much_snow_did_we_get_snowf_4.html",urlToImage:"https://image.masslive.com/home/mass-media/width620/img/weather_impact/photo/25026163-standard.png",publishedAt:"2018-11-16T03:13:54Z",content:null},{source:{id:null,name:"Chicagotribune.com"},author:"Associated Press",title:"Kim Porter, Diddy's former longtime girlfriend and mother to 3 children, dies at 47",description:"Kim Porter, Diddy's former longtime girlfriend and the mother of three of his children, has died. Diddy and Porter, a former model and occasional actress from Georgia, were a couple on-and-off from 1994 until they split for good in 2007.",url:"https://www.chicagotribune.com/entertainment/music/ct-ent-kim-porter-dead-20181115-story.html",urlToImage:"https://www.trbimg.com/img-5bee3500/turbine/ct-ent-kim-porter-dead-20181115",publishedAt:"2018-11-16T03:05:00Z",content:"Kim Porter, Diddy's former longtime girlfriend and the mother of three of his children, has died at age 47. A representative for Sean \"Diddy\" Combs confirmed Porter's death on Thursday, but no further details were immediately available. Diddy and Porter, a fo\u2026 [+1860 chars]"},{source:{id:"nbc-news",name:"NBC News"},author:"Phil McCausland",title:"VA unwilling to estimate when GI Bill benefit payment issues will be fixed",description:"Officials from the Department of Veterans Affairs testified at a hearing Thursday that they still don't know when their information technology system would be updated to address issues of sending GI Bill benefit payments to veterans.",url:"https://www.nbcnews.com/news/us-news/va-unwilling-estimate-when-gi-bill-benefit-payment-issues-will-n936986",urlToImage:"https://media4.s-nbcnews.com/j/newscms/2018_46/2648446/181115-veterans-day-se-918p_c84a8df4c0f21e94eb80ff9204e156c9.1200;630;7;70;5.jpg",publishedAt:"2018-11-16T01:48:00Z",content:"Get breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings. SUBSCRIBE Nov. 16, 2018 / 1:48 AM GMT Officials from the Department of Veterans Affairs testified Thursday before a House committee that they still don\u2026 [+5472 chars]"},{source:{id:"the-huffington-post",name:"The Huffington Post"},author:"Daniel Marans",title:"Elizabeth Warren Prot\xe9g\xe9 Katie Porter Wins Southern California House Race",description:"The Democrat ousted GOP Rep. Mimi Walters in historically Republican Orange County.",url:"https://www.huffingtonpost.com/entry/democrat-katie-porter-wins-california-orange-county_us_5bdf7f2ee4b09d43e3200975",urlToImage:"https://img.huffingtonpost.com/asset/5bdf80d2220000e503dda4c9.jpeg?cache=ov6tolvfaw&ops=1910_1000",publishedAt:"2018-11-16T01:43:34Z",content:"Katie Porter, a consumer law expert and former student of Sen. Elizabeth Warren (D-Mass.), flipped a GOP-held seat in California\u2019s traditionally Republican Orange County. Because so many California voters cast their ballots by mail or through absentee voting,\u2026 [+3659 chars]"},{source:{id:"the-new-york-times",name:"The New York Times"},author:null,title:"Here's Why Florida and Georgia's Election Day Has Turned into Election Week and a Half",description:"Election results still aren\u2019t clear in Florida and Georgia, where lawsuits, recounts and confusion are the order of the day.",url:"https://www.nytimes.com/2018/11/15/us/recounts-florida-georgia-elections.html",urlToImage:"https://static01.nyt.com/images/2018/11/16/autossell/16REcount-explainer/merlin_146623206_36775177-aad5-4ff3-8777-1f1791eb11cb-facebookJumbo.jpg",publishedAt:"2018-11-16T01:29:02Z",content:"[ The hottest spot in Florida? The seat of the Broward County elections chief. ] If a county can\u2019t meet the recount deadline, the previous unofficial results stand \u2014 those filed on Saturday. But \u2014 and there is always a \u201cbut\u201d in Florida \u2014 under state statute, \u2026 [+2740 chars]"},{source:{id:"the-new-york-times",name:"The New York Times"},author:null,title:"A Look Inside the Tactics of Definers, Facebook's Attack Dog",description:"The opposition research firm had focused on the internet company\u2019s competition. But ahead of a Senate hearing it had a new target: senators.",url:"https://www.nytimes.com/2018/11/15/technology/facebook-definers-opposition-research.html",urlToImage:"https://static01.nyt.com/images/2018/11/15/climate/16definders01/16definders01-facebookJumbo.jpg",publishedAt:"2018-11-16T01:25:12Z",content:"Facebook had also lobbied for the hearing to include a Google emissary of similar rank to Ms. Sandberg. Mr. Burr invited Larry Page, a Google co-founder, but he did not show up. Instead, Ms. Sandberg sat alongside an empty chair behind a placard for Google. I\u2026 [+1659 chars]"},{source:{id:"the-huffington-post",name:"The Huffington Post"},author:"David Moye",title:"Twitter Users Have Alexandria Ocasio-Cortez's Back After She Was Fashion-Shamed",description:"Washington Examiner journalist Eddie Scarry seemed amazed the newly elected congresswoman could wear nice clothes after she said she couldn't afford rent in D.C.",url:"https://www.huffingtonpost.com/entry/alexandria-ocasio-cortez-fashion_us_5bee0181e4b0510a1f2f217a",urlToImage:"https://img.huffingtonpost.com/asset/5bee03282100002906ca26fa.jpeg?cache=oE7DME9DeO&ops=1200_630",publishedAt:"2018-11-16T01:23:49Z",content:"A conservative journalist attempted to fashion-shame newly elected congresswoman Alexandria Ocasio-Cortez, but got a dressing-down from Twitter users instead. On Thursday, Washington Examiner reporter Eddie Scarry posted a photo of the Democratic congresswoma\u2026 [+4737 chars]"},{source:{id:"the-new-york-times",name:"The New York Times"},author:null,title:"Four US Commandos Charged in Strangling of Army Green Beret in Africa",description:"The highly unusual fratricidal killing last year cast a spotlight on little-known military missions on the continent.",url:"https://www.nytimes.com/2018/11/15/us/politics/green-beret-navy-seals-mali-melgar.html",urlToImage:"https://static01.nyt.com/images/2018/11/16/us/politics/16dc-commando-print/16dc-commando-facebookJumbo.jpg",publishedAt:"2018-11-15T22:35:21Z",content:"Sergeant Melgar, a graduate of Texas Tech University who joined the Army in 2012, was assigned to the Third Special Forces Group, based at Fort Bragg, N.C., the same unit whose soldiers were attacked by a much larger and heavily armed group of Islamic State f\u2026 [+1835 chars]"},{source:{id:null,name:"Vanityfair.com"},author:"Bess Levin",title:"White House Wants to Sentence a Man to Death to Ease Pressure on Saudi Arabia",description:"The Trump administration is reportedly trying to figure out a way to throw an enemy of Turkish President Recep Erdo\u011fan out of the country so he\u2019ll get off the crown prince\u2019s back.",url:"https://www.vanityfair.com/news/2018/11/white-house-turkey-dissident-saudi-arabia",urlToImage:"https://media.vanityfair.com/photos/5bc7749b3b91752db000f341/16:9/w_1200,h_630,c_limit/donaldtrumpmbs.jpg",publishedAt:"2018-11-15T22:30:45Z",content:"Since it first publicly commented on the matter of dissident journalist Jamal Khashoggi entering the Saudi consulate in Istanbul on October 2 and never coming out, the Trump administration has made one thing clear: it has no plans whatsoever to let a U.S. res\u2026 [+11194 chars]"},{source:{id:"the-new-york-times",name:"The New York Times"},author:null,title:"Baltimore 'Fiddler' Disrupted by 'Heil Hitler, Heil Trump'",description:"A man was removed from the Hippodrome Theater in Baltimore after he loudly yelled pro-Hitler slogans during intermission.",url:"https://www.nytimes.com/2018/11/15/theater/fiddler-on-the-roof-heil-hitler-heil-trump.html",urlToImage:"https://static01.nyt.com/images/2018/11/16/arts/16FIDDLER/16FIDDLER-facebookJumbo.jpg",publishedAt:"2018-11-15T22:19:52Z",content:"The original \u201cFiddler on the Roof,\u201d which debuted on Broadway in 1964, tells the story of a milkman, Tevye, seeking to maintain his family\u2019s religious traditions at a time of rising anti-Semitism. A popular Yiddish-language version of the show, put on by the \u2026 [+1565 chars]"},{source:{id:"cnn",name:"CNN"},author:"Lauren Jackson, CNN",title:"Stormy Daniels says she will get a new lawyer if domestic violence allegations against Avenatti are true",description:"Adult-film actress Stormy Daniels said Thursday that she would get a new lawyer if the domestic violence allegations against Michael Avenatti, her current attorney, are true.",url:"https://www.cnn.com/2018/11/15/politics/stormy-daniels-avenatti-domestic-violence-allegations/index.html",urlToImage:"https://cdn.cnn.com/cnnnext/dam/assets/180416180345-stormy-daniels-0416-super-tease.jpg",publishedAt:"2018-11-15T22:19:00Z",content:"Oxford, England (CNN) Adult-film actress Stormy Daniels said Thursday that she would get a new lawyer if the domestic violence allegations against Michael Avenatti, her current attorney, are true. Daniels, whose real name is Stephanie Clifford, made her first\u2026 [+2265 chars]"},{source:{id:"nbc-news",name:"NBC News"},author:"Erik Ortiz, Kurt Chirbas",title:"Homeless man and NJ couple concocted story for GoFundMe fundraiser, prosecutor says",description:"New Jersey couple Mark D'Amico and Kate McClure allegedly made up the campaign in honor of Johnny Bobbitt Jr. so that all three could raise money by deceiving donors.",url:"https://www.nbcnews.com/news/us-news/homeless-man-n-j-couple-concocted-story-gofundme-fundraiser-complaint-n936511",urlToImage:"https://media2.s-nbcnews.com/j/newscms/2018_46/2558931/180907-johnny-bobbitt-kate-mcclure-mark-damico-2017-ew-336p_1e8ae0f47f2370d3c23136aaa54509c0.1200;630;7;70;5.jpg",publishedAt:"2018-11-15T21:45:16Z",content:'Get breaking news alerts and special reports. The news and stories that matter, delivered weekday mornings. SUBSCRIBE Nov. 15, 2018 / 11:51 AM GMT / Updated 1:26 AM GMT By Erik Ortiz and Kurt Chirbas A "feel-good story" that grabbed national attention when a \u2026 [+5602 chars]'},{source:{id:"fox-news",name:"Fox News"},author:"Katherine Lam",title:"Convicted killer, 78, may be tied to more than 90 cold case homicides, police say",description:"A 78-year-old man serving a life sentence for killing three women may be tied to more than 90 unsolved homicides dating back to the 1970s, police said.",url:"https://www.foxnews.com/us/man-78-may-be-tied-to-more-than-90-cold-case-homicides-police-say",urlToImage:"https://static.foxnews.com/foxnews.com/content/uploads/2018/11/181114-samuel-little-mugshot-cs-101p_e4d03198ce9d3323f2c79301ec2c364f.fit-360w.jpg",publishedAt:"2018-11-15T20:09:42Z",content:"A 78-year-old man serving a life sentence for killing three women may be tied to more than 90 unsolved homicides dating back to the 1970s, police said. Authorities extradited Samuel Little from California to Texas in July after charging him in the 1994 murder\u2026 [+1708 chars]"}]}}},[[209,2,1]]]);
//# sourceMappingURL=main.565d6735.chunk.js.map