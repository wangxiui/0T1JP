(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8728:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Navbar_root__Fy_C3",
	"link": "Navbar_link__DtoSn",
	"logo": "Navbar_logo__gk0h3"
};


/***/ }),

/***/ 1731:
/***/ ((module) => {

// Exports
module.exports = {
	"my-slider": "styles_my-slider__XbsO3"
};


/***/ }),

/***/ 8085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/.pnpm/next@13.0.3_orpxj3vgaelozwpc7iiuainqz4/node_modules/next/link.js
var next_link = __webpack_require__(9234);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/ui/Navbar/Navbar.module.scss
var Navbar_module = __webpack_require__(8728);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/icons/Logo.tsx

const Logo = ({ className ="" , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                width: "100%",
                height: "100%",
                rx: "16",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
                fill: "black"
            })
        ]
    });
/* harmony default export */ const icons_Logo = (Logo);

;// CONCATENATED MODULE: ./components/ui/Navbar/Navbar.tsx





// import { useUser } from 'lib/useUser';
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
const Navbar = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    // const supabaseClient = useSupabaseClient();
    // const { user } = useUser();
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Navbar_module_default()).root,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-6xl px-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-between align-center flex-row py-4 md:py-6 relative",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-1 items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (Navbar_module_default()).logo,
                            "aria-label": "Logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_Logo, {})
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/ui/Navbar/index.ts


;// CONCATENATED MODULE: ./components/business/Layout/Layout.tsx




function Layout({ children , meta: pageMeta  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const meta = {
        title: "Next.js Subscription Starter",
        description: "Brought to you by Vercel, Stripe, and Supabase.",
        cardImage: "/og.png",
        ...pageMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/public/favicon.ico",
                        rel: "shortcut icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://subscription-starter.vercel.app${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.cardImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@vercel"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.cardImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar_Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        id: "skip",
                        className: "h-10 flex-grow",
                        children: children
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/business/Layout/index.ts



/***/ }),

/***/ 3836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Word)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
* @name: Word
* @description：一个单词卡片
* @author: wkk
* @date: 2022-11-13
*/ 



/**
 * 一个单词卡片
 * @param props
 * @constructor
 */ function Word(props) {
    const { item , className  } = props;
    const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(`w-96 h-96 m-auto bg-transparent border-solid border-2 border-indigo-600 flex justify-center items-center 
    flex-col rounded-lg shadow-lg shadow-blue-500/50 text-7xl`, className);
    const [isPositive, setIsPositive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    return(// 点击：展示正反面
    isPositive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9
        },
        className: rootClassName,
        onClick: ()=>setIsPositive(false),
        children: item.cn
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9
        },
        className: rootClassName,
        onClick: ()=>setIsPositive(true),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: item.jp
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-6 text-gray-300 text-5xl",
                children: item.spell
            })
        ]
    }));
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport safe */ _Word__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3836);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Word__WEBPACK_IMPORTED_MODULE_0__]);
_Word__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ getWordsData)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./lib/words.ts


const postsDirectory = external_path_default().join(process.cwd(), "data");
async function getWordsData(id) {
    const fullPath = external_path_default().join(postsDirectory, `${id}.json`);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    // console.log('getWordsData', fileContents);
    // Combine the data with the id
    return {
        id,
        data: fileContents
    };
}


/***/ }),

/***/ 8689:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_business_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8085);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8181);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_business_Word__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6386);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1731);
/* harmony import */ var styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_business_Word__WEBPACK_IMPORTED_MODULE_3__]);
components_business_Word__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// import Button from '@mui/material/Button';






function Home(props) {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 7000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const { wordsData  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_business_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "overflow-auto w-full h-full my",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: 1440,
                    height: 900,
                    src: "/images/background-tutorial.svg",
                    className: "w-full h-auto max-h-full object-cover object-center object-top fixed -z-10",
                    alt: "bg image"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pt-10 h-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_slick__WEBPACK_IMPORTED_MODULE_4___default()), {
                        ...settings,
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("h-full", (styles_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["my-slider"])),
                        children: wordsData.data.map((v)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_business_Word__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    item: v,
                                    className: "animate__animated animate__flash animate__infinite animate__slow"
                                })
                            }, v.cn))
                    })
                })
            ]
        })
    });
}
/**
 * 获取所有的单词
 */ const getStaticProps = async ()=>{
    // Fetch necessary data for the blog post using params.id
    const wordsData = await (0,_lib_words__WEBPACK_IMPORTED_MODULE_5__/* .getWordsData */ .c)("Words");
    return {
        props: {
            wordsData: {
                id: wordsData.id,
                data: JSON.parse(wordsData.data)
            }
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 8096:
/***/ ((module) => {

"use strict";
module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88,234,181], () => (__webpack_exec__(8689)));
module.exports = __webpack_exports__;

})();