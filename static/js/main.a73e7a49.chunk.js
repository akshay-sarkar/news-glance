(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(361)},205:function(e,t,a){},207:function(e,t,a){},361:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),i=a.n(l),s=(a(205),a(19)),o=a(20),c=a(23),u=a(21),m=a(22),d=a(28),h=a(363),p=(a(207),a(12)),g=a(57),f=a.n(g),b=a(45),E=a.n(b),w=a(56),O=a.n(w),v=a(127),y=a.n(v),j=a(44),C=a.n(j),S=a(31),k=a.n(S),x=a(38),F=a(29),W=a(7),A=a(58),D=a.n(A);a(216);D.a.initializeApp({apiKey:"AIzaSyBSQ0SchiukUFpEb4zp_85yBKxZ5rYDR2c",authDomain:"lets-read-news.firebaseapp.com",databaseURL:"https://lets-read-news.firebaseio.com",projectId:"lets-read-news",storageBucket:"lets-read-news.appspot.com",messagingSenderId:"1025448345928"});new D.a.auth.GoogleAuthProvider;var N=D.a.auth(),P={email:"",password:"",confirmPassword:"",error:null,success:null},z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.sendEmail=function(e){a.setState({success:"An email is sent for verification."}),e.user.sendEmailVerification().then(function(){console.log("email verification sent to user")}).catch(function(e){console.log("failure"),a.setState({error:e})})},a.state=Object(x.a)({open:!1},P),a.signup=a.signup.bind(Object(F.a)(Object(F.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"signup",value:function(e){var t=this,a=this.state,n=a.email,r=a.password;N.createUserWithEmailAndPassword(n,r).then(function(e){console.log("sucess",e),t.setState(Object(x.a)({},P)),e&&!1===e.user.emailVerified&&t.sendEmail(e)}).catch(function(e){console.log("faliure"),t.setState({error:e})}),e.preventDefault()}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.email,n=t.password,l=t.confirmPassword,i=t.error,s=t.success,o=n!==l||""===n||""===a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{size:"small",onClick:this.handleOpen},"Sign up"),r.a.createElement(W.b,{"aria-labelledby":"auth-modal-title",open:this.state.open,onClose:this.handleClose},r.a.createElement(W.f,{id:"form-dialog-title"},"Sign Up"),r.a.createElement("form",{autoComplete:"on",onSubmit:this.signup},r.a.createElement(W.d,null,r.a.createElement(W.e,null,"Signup to create customize news feed."),r.a.createElement(W.g,{required:!0,id:"email-address-input",label:"Email Address",className:e.textField,margin:"normal",value:a,onChange:this.handleChange("email"),fullWidth:!0}),r.a.createElement(W.g,{required:!0,id:"password-input",label:"Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:n,onChange:this.handleChange("password")}),r.a.createElement(W.g,{required:!0,id:"confirm-password-input",label:" Confirm Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:l,onChange:this.handleChange("confirmPassword")})),r.a.createElement(W.c,null,r.a.createElement(W.a,{onClick:this.handleClose,color:"primary"}," Cancel "),r.a.createElement(W.a,{color:"primary",disabled:o,type:"submit"}," SignUp ")),i&&r.a.createElement("p",null,i.message),s&&r.a.createElement("p",null,s.message))))}}]),t}(n.Component),T=Object(p.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}},{withTheme:!0})(z),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){N.signOut().then(function(e){console.log("sucess",e)}).catch(function(e){console.log("error",e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{variant:"outlined",size:"small",onClick:this.handleLogout},"Logout"))}}]),t}(n.Component),L=Object(p.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}},{withTheme:!0})(I),U=r.a.createContext(),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={age:100,userData:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(U.Provider,{value:{state:this.state,growAYearOlder:function(){return e.setState({age:e.state.age+1})},updateUserData:function(t){return e.setState({userData:t})}}},this.props.children)}}]),t}(n.Component),R={email:"akshay.sarkar.dbit@gmail.com",password:"akshays",error:null,success:null},q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleChange=function(e){return function(t){a.setState(Object(d.a)({},e,t.target.value))}},a.signin=function(e){var t=a.state,n=t.email,r=t.password;N.signInWithEmailAndPassword(n,r).then(function(e){console.log("sucess",e),a.setState(Object(x.a)({},R))}).catch(function(e){console.log("faliure"),a.setState({error:e})}),e.preventDefault()},a.state=Object(x.a)({open:!1},R),a.signin=a.signin.bind(Object(F.a)(Object(F.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.email,n=t.password,l=t.error,i=t.success,s=""===n||""===a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{size:"small",onClick:this.handleOpen},"Sign In"),r.a.createElement(W.b,{"aria-labelledby":"auth-modal-title",open:this.state.open,onClose:this.handleClose},r.a.createElement(W.f,{id:"form-dialog-title"},"Sign In"),r.a.createElement("form",{autoComplete:"on",onSubmit:this.signin},r.a.createElement(W.d,null,r.a.createElement(W.e,null,"SignIn to read your customize news feed."),r.a.createElement(W.g,{required:!0,id:"email-address-input",label:"Email Address",className:e.textField,margin:"normal",value:a,onChange:this.handleChange("email"),fullWidth:!0}),r.a.createElement(W.g,{required:!0,id:"password-input",label:"Password",className:e.textField,type:"password",margin:"normal",fullWidth:!0,value:n,onChange:this.handleChange("password")})),r.a.createElement(W.c,null,r.a.createElement(W.a,{onClick:this.handleClose,color:"primary"}," Cancel "),r.a.createElement(W.a,{color:"primary",disabled:s,type:"submit"}," SignIn ")),l&&r.a.createElement("p",null,l.message),i&&r.a.createElement("p",null,i.message))))}}]),t}(n.Component),M=Object(p.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit}}},{withTheme:!0})(q),V=["Technology","Design","Culture","Business","Politics","Opinion","Science","Health","Style","Travel"],G=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.onAuthStateChanged(function(t){t?(console.log(e.context),e.context.updateUserData(t),console.log("user is set state..")):(e.context.updateUserData(null),console.log("not authorized"))})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(U.Consumer,null,function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:e.toolbarMain},r.a.createElement(C.a,{size:"small"},"Subscribe"),r.a.createElement(k.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle}," News Glance "),r.a.createElement(O.a,null,r.a.createElement(y.a,null)),t.state.userData?r.a.createElement(L,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(M,null))),r.a.createElement(E.a,{variant:"dense",className:e.toolbarSecondary},V.map(function(e){return r.a.createElement(k.a,{color:"inherit",noWrap:!0,key:e},e)})))})}}]),t}(n.Component);G.contextType=U;var J=Object(p.withStyles)({toolbarMain:{borderBottom:"1px solid brown"},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between"}})(G),K=Object(p.createMuiTheme)({typography:{useNextVariants:!0}}),Y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(B,null,r.a.createElement(p.MuiThemeProvider,{theme:K},r.a.createElement("div",{className:"App"},r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement("div",{className:e.layout},r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(J,null))))))))}}]),t}(n.Component),H=Object(p.withStyles)(function(e){return{layout:Object(d.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"})}})(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,2,1]]]);
//# sourceMappingURL=main.a73e7a49.chunk.js.map