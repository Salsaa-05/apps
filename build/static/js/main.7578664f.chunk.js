(this.webpackJsonptodooo=this.webpackJsonptodooo||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),o=(a(13),a(1)),l=a(2),s=a(3),m=a(4),u=(a(14),a(15),function(e){var t=e.items,a=e.deleteItem,n=t.length?t.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"age"},e.age),r.a.createElement("span",{className:"action icon",onClick:function(){return a(e.id)}},"\xd7"))})):r.a.createElement("p",null,"There is no item to show");return r.a.createElement("div",{className:"ListItems"},r.a.createElement("div",null,r.a.createElement("span",{className:"name title"},'"Name"'),r.a.createElement("span",{className:"age title"},'"Age"'),r.a.createElement("span",{className:"action title"},'"Action "')),n)}),d=a(7),h=(a(16),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",age:""},e.handelChange=function(t){e.setState(Object(d.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),""===t.target.name.value)return!1;e.props.addItem(e.state),e.setState({name:"",age:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Enter name...",id:"name",onChange:this.handelChange,value:this.state.name}),r.a.createElement("input",{type:"number",placeholder:"Enter age...",id:"age",onChange:this.handelChange,value:this.state.age}),r.a.createElement("input",{type:"submit",value:"Add"})))}}]),a}(n.Component)),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[{id:1,name:"Saad",age:24},{id:2,name:"Gregorio",age:28},{id:3,name:"Delpero",age:38}]},e.deleteItem=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a})},e.addItem=function(t){t.id=Math.random();var a=e.state.items;a.push(t),e.setState({items:a})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App containar"},r.a.createElement("h1",{className:"text-center"},"List of Rrsidents"),r.a.createElement(u,{items:this.state.items,deleteItem:this.deleteItem}),r.a.createElement(h,{addItem:this.addItem}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.7578664f.chunk.js.map