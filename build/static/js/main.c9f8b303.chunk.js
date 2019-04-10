(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t.p+"static/media/left.5434740c.svg"},21:function(e,n,t){e.exports=t.p+"static/media/placeholder.26d52820.jpg"},27:function(e,n,t){e.exports=t.p+"static/media/right.11ea5efb.svg"},37:function(e,n,t){e.exports=t.p+"static/media/search.a87eca9e.svg"},44:function(e,n,t){e.exports=t(77)},49:function(e,n,t){},50:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(20),o=t.n(c),i=(t(49),t(50),t(4)),l=Object(i.a)(),u=t(10),s=t(9),m=t(22),d=t(37),p=t.n(d),f=function(){var e=Object(a.useState)(""),n=Object(m.a)(e,2),t=n[0],c=n[1];function o(e){e.preventDefault(),0!==t.length&&(c(""),window.location.href="".concat("","/search/").concat(t))}return r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{onChange:function(e){return c(e.target.value)},id:"searchInput",type:"text",placeholder:"Search for a movie...",value:t,autoComplete:"off"}),r.a.createElement("button",{className:"searchIcon",type:"submit",onClick:o},r.a.createElement("img",{alt:"Search",src:p.a})))},h=function(){return r.a.createElement("header",{id:"header"},r.a.createElement(s.a,{id:"logo",to:"/"},"cine",r.a.createElement("span",null,"philed")),r.a.createElement(f,null))},b=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("h4",null,"Built by ",r.a.createElement("a",{href:"https://connorpote.co.uk",target:"_blank",rel:"noopener noreferrer"},"Connor Pote")))},g=t(11),v=t(12),E=t(14),x=t(13),w=t(15),y=t(6),j=t(2),k=t(40),O=t.n(k).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"0ddaa25ecf2d456f112e8c778772848a"}}),M=function(e){var n=this;O.get("/movie/".concat(e)).then(function(e){n.setState({activeMovie:e.data})}).catch(function(e){return console.log(e),r.a.createElement("div",{id:"error"},r.a.createElement("p",null,"test"))})};var R=function(e,n){var t=this;O.get("/discover/movie",{params:{query:e,page:n}}).then(function(e){t.setState({searchResults:e.data})}).catch(function(e){console.log(e)})},N=t(3),P=t(18),S=t.n(P),C=t(21),_=t.n(C);function B(){var e=Object(j.a)(["\n\n\n            h3 {\n                margin-bottom:0rem;\n            }\n            p {\n                margin-top:0.5rem;\n            }\n        "]);return B=function(){return e},e}function D(){var e=Object(j.a)(["\n            display: flex;\n            -webkit-box-align: center;\n            align-items: center;\n            margin-bottom: 3rem;\n            flex-wrap: wrap;\n\n            .item {\n                background-color: #1b1b1b;\n                color: #fff;\n                border-radius: 100px;\n                padding: 4px;\n                font-size: 0.8rem;\n                margin-right: 0.3rem;\n                padding: 5px 10px;\n                margin-bottom: 0.5rem;\n\n                &:last-of-type {\n                    margin-right:0;\n                }\n            }\n        "]);return D=function(){return e},e}function T(){var e=Object(j.a)(["\n            h4 {\n                // color:#1b1b1b8f;\n            }\n            .budget {\n                margin-bottom:0;\n            }\n            .revenue {\n                margin-top:0.5rem;\n\n                &.profit span {\n                    color:#3dc018;\n\n                }\n                &.loss span {\n                    color:red;\n                }\n            }\n        "]);return T=function(){return e},e}function z(){var e=Object(j.a)(["\n            color:#ff6f80;\n            margin-top:0.6rem;\n        "]);return z=function(){return e},e}function I(){var e=Object(j.a)(["\n            font-size: 2.5rem;\n            margin-top: 0;\n            margin-bottom: 0;\n        "]);return I=function(){return e},e}function Q(){var e=Object(j.a)(["\n            width: 100%;\n            max-width: 60%;\n            \n            // padding-top: 4rem;\n            // flex-grow: 1;\n            // flex-shrink: 1;\n            flex-basis: 60%;\n            // padding: 3rem;\n            padding-left:3rem;\n\n            @media (max-width:750px) {\n                max-width: 100%;\n                flex-basis: 100%;\n                padding:2rem 0;\n            }\n\n        "]);return Q=function(){return e},e}function q(){var e=Object(j.a)(["\n            width: 100%;\n            max-width: 40%;\n            flex-basis: 40%;\n            align-items: center;\n            justify-content: center;\n            display: flex;\n\n            @media (max-width:750px) {\n                // max-width: 100%;\n                max-width: 45%;\n                flex-basis: 100%;\n                padding:2rem 0 0;\n            }\n            @media (max-width:500px) {\n                max-width: 80%;\n                flex-basis: 100%;\n            }\n\n            img {\n                max-height: 100%;\n                height: auto;\n                object-fit: cover;\n                max-width: 100%;\n                box-shadow: 0rem 2rem 5rem rgba(0,0,0,0.25);\n                border-radius: 0.8rem;\n            }\n        "]);return q=function(){return e},e}function J(){var e=Object(j.a)(["\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 100%;\n            max-width: 1000px;\n            margin: 0 auto;\n\n            @media (max-width:1000px) {\n                max-width: 90%;\n            }\n            @media (max-width:750px) {\n                flex-direction: column;\n            }\n            \n\n            &.return {\n                position: absolute;\n                left: 32px;\n                max-width: 150px;\n\n                #back {\n                    cursor: pointer;\n                }\n\n                @media (max-width: 1300px) {\n                    display:none;\n                }\n            }\n        "]);return J=function(){return e},e}function L(){var e=Object(j.a)(["\n            width: 100%;\n            height: 100%;\n            min-height: 92.5vh;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            background-image: radial-gradient(circle at 20% 50%,rgba(255, 255, 255, 0.98) 0%,rgba(255, 255, 255, 0.8) 100%);\n\n            &:before {\n                content: '';\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                height: 100%;\n                z-index: -1;\n                display: block;\n                // filter: opacity(0) grayscale(100%) contrast(130%);\n                filter: opacity(100) grayscale(100%) contrast(130%);\n                background-size: cover;\n                background-repeat: no-repeat;\n                background-position: 50% 50%;\n                background-image: url('https://image.tmdb.org/t/p/original/","');\n                will-change: opacity;\n                transition: filter 1s;\n            }\n           \n        "]);return L=function(){return e},e}function $(){var e=Object(j.a)(["\n// background-color: #1b1b1b;\n// color: #fff;\nborder-radius: 100px;\npadding: 4px;\nfont-size: 0.8rem;\nmargin-right: 0.3rem;\npadding: 5px 10px;\ntext-decoration: none;\nborder: 1px solid #1b1b1b;\ncolor: #1b1b1b;\ntransition:.4s ease;\n\n&:hover {\n    background-color: #1b1b1b;\n    color: #fff;\n}\n"]);return $=function(){return e},e}var U=N.a.a($()),A=function(e){function n(){var e;return Object(g.a)(this,n),(e=Object(E.a)(this,Object(x.a)(n).call(this))).componentDidMount=function(){var n=e.props.match.params.id;e.getMovie(n)},e.state={activeMovie:[]},e.getMovie=M.bind(Object(y.a)(Object(y.a)(e))),e}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e,n,t=this.state.activeMovie,a=N.a.div(L(),t.backdrop_path),c=N.a.div(J()),o=N.a.div(q()),i=N.a.div(Q()),u=N.a.h1(I()),s=N.a.h3(z()),d=N.a.div(T()),p=N.a.div(D()),f=N.a.div(B());return r.a.createElement(a,null,r.a.createElement(c,{className:"return"},function(){if("PUSH"===l.action)return r.a.createElement("div",{id:"back",onClick:l.goBack},r.a.createElement("div",{title:"Back"},r.a.createElement("img",{alt:"Return to previous page",src:S.a})))}()),r.a.createElement(c,null,r.a.createElement(o,null,(e=t.poster_path,n=t.title,e?r.a.createElement("img",{alt:"Poster for ".concat(n),src:"https://image.tmdb.org/t/p/w780/".concat(e)}):r.a.createElement("img",{alt:"Missing Poster for ".concat(n),src:_.a}))),r.a.createElement(i,null,r.a.createElement(u,null,t.title),r.a.createElement(s,null,t.tagline),r.a.createElement(d,null,function(e){var n=e/60,t=Math.floor(n),a=60*(n-t),r=Math.round(a);return t?"".concat(t,"h ").concat(r,"m"):"".concat(r,"m")}(t.runtime)," / ",function(e){if(e){var n=e.split("-"),t=Object(m.a)(n,3),a=t[0],r=t[1],c=t[2],o=new Date(a,r-1,c),i=o.getMonth();return"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(a)}}(t.release_date)),r.a.createElement(f,null,r.a.createElement("h3",null,"Overview"),r.a.createElement("p",null,t.overview)),r.a.createElement(d,null,function(e,n){var t=parseInt(e).toLocaleString(),a=parseInt(n).toLocaleString();return n<e?r.a.createElement("div",null,r.a.createElement("h4",{className:"budget"},"Budget: $",t),r.a.createElement("h4",{className:"revenue loss"},"Total Revenue: ",r.a.createElement("span",null,"$",a))):0===n||0===e?"":r.a.createElement("div",null,r.a.createElement("h4",{className:"budget"},"Budget: $",t),r.a.createElement("h4",{className:"revenue profit"},"Total Revenue: ",r.a.createElement("span",null,"$",a)))}(t.budget,t.revenue)),r.a.createElement(p,null,function(e){if(e)return e.map(function(e){return r.a.createElement("div",{className:"item",key:e.id},e.name)})}(t.genres)),t.homepage?r.a.createElement(U,{href:t.homepage,target:"_blank",rel:"noopener noreferrer"},"View Site"):"",t.imdb_id?r.a.createElement(U,{href:"https://www.imdb.com/title/".concat(t.imdb_id),target:"_blank",rel:"noopener noreferrer"},"View IMDB"):"")))}}]),n}(r.a.Component);var V=function(e){var n,t,a=e.data;return r.a.createElement("div",{id:"movieTile"},r.a.createElement(s.a,{to:{pathname:"/movie/".concat(a.id)}},(n=a.poster_path,t=a.title,n?r.a.createElement("img",{alt:"Poster for ".concat(t),src:"https://image.tmdb.org/t/p/w780/".concat(n)}):r.a.createElement("img",{alt:"Missing Poster for ".concat(t),src:_.a})),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,a.title))))};var W=t(27),F=t.n(W);function H(){var e=Object(j.a)(["\n\npadding: 1rem 0 3rem;\ndisplay: flex;\njustify-content: space-around;\n\n"]);return H=function(){return e},e}function G(){var e=Object(j.a)(["\n// background-color: #1b1b1b;\n// color: #fff;\nborder-radius: 100px;\npadding: 4px;\nfont-size: 0.8rem;\npadding: 5px 10px;\ntext-decoration: none;\nborder: 1px solid #1b1b1b;\ncolor: #1b1b1b;\ntransition:.4s ease;\nbackground-color:transparent;\ncursor:pointer;\nmin-width: 110px;\n\nimg, span {\n    vertical-align: middle;\n}\n\n&:hover {\n    background-color: #efefef;\n    color: #1b1b1b;\n}\n"]);return G=function(){return e},e}var K=N.a.button(G()),X=N.a.div(H()),Y=function(e){var n=e.fullResult,t=e.scrollToMyRef,a=n.page,c=n.total_pages;return 1===c?null:a<c&&1===a?r.a.createElement(X,null,r.a.createElement(s.a,{to:"".concat("","?page=").concat(a+1),onClick:function(){return t()}},r.a.createElement(K,{className:"next",title:"Page ".concat(a+1)},r.a.createElement("span",null,"Next"),r.a.createElement("img",{alt:"Next page button",src:F.a})))):a<c?r.a.createElement(X,null,r.a.createElement(s.a,{to:"".concat("","?page=").concat(a-1),onClick:function(){return t()}},r.a.createElement(K,{className:"prev",title:"Page ".concat(a-1),icon:"arrow-left"},r.a.createElement("img",{alt:"Previous page button",src:S.a}),r.a.createElement("span",null,"Previous"))),r.a.createElement(s.a,{to:"".concat("","?page=").concat(a+1),onClick:function(){return t()}},r.a.createElement(K,{className:"next",title:"Page ".concat(a+1),icon:"arrow-right"},r.a.createElement("span",null,"Next"),r.a.createElement("img",{alt:"Next page button",src:F.a})))):r.a.createElement(X,null,r.a.createElement(s.a,{to:"".concat("","?page=").concat(a-1),onClick:function(){return t()}},r.a.createElement(K,{className:"prev",title:"Page ".concat(a-1)},r.a.createElement("img",{alt:"Previous page button",src:S.a}),r.a.createElement("span",null,"Previous"))))},Z=function(e){var n=e.movieResults.results,t=e.movieResults,a=e.searchQuery;return r.a.createElement("section",{key:a},r.a.createElement("div",{id:"wrapper"},n?n.map(function(e){return r.a.createElement(V,{key:e.id,data:e})}):""),r.a.createElement(Y,{key:a,fullResult:t,scrollToMyRef:function(){window.scrollTo({top:Element.current.offsetTop,behavior:"smooth"})}}))},ee=function(e){function n(){var e;return Object(g.a)(this,n),(e=Object(E.a)(this,Object(x.a)(n).call(this))).componentDidMount=function(){var n=e.props.match.params.query,t=window.location.search,a=new URLSearchParams(t).get("page");e.setState({searchQuery:n}),e.searchMovies(n,a)},e.state={searchResults:[],searchQuery:""},e.searchMovies=function(e,n){var t=this;return O.get("/search/movie",{params:{query:e,page:n}}).then(function(e){return t.setState({searchResults:e.data}),e.data}).catch(function(e){console.error(e)})}.bind(Object(y.a)(Object(y.a)(e))),e}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){return r.a.createElement(Z,{key:this.state.searchQuery,searchQuery:this.state.searchQuery,movieResults:this.state.searchResults})}}]),n}(r.a.Component),ne=function(e){function n(){var e;return Object(g.a)(this,n),(e=Object(E.a)(this,Object(x.a)(n).call(this))).componentDidMount=function(){var n=e.props.match.params.query,t=window.location.search,a=new URLSearchParams(t).get("page");e.discoverMovies(n,a)},e.state={searchResults:[]},e.discoverMovies=R.bind(Object(y.a)(Object(y.a)(e))),e}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.state.searchResults;return r.a.createElement(Z,{movieResults:e})}}]),n}(r.a.Component),te=function(){return r.a.createElement(u.c,{history:l},r.a.createElement("div",{id:"app"},r.a.createElement(h,null),r.a.createElement("div",{id:"page"},r.a.createElement("section",{id:"main-content"},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{from:"/",to:"/discover/"})}}),r.a.createElement(u.b,{path:"/search/:query",exact:!0,component:ee}),r.a.createElement(u.b,{path:"/movie/:id",exact:!0,component:A}),r.a.createElement(u.b,{path:"/discover/",component:ne})))),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[44,1,2]]]);
//# sourceMappingURL=main.c9f8b303.chunk.js.map