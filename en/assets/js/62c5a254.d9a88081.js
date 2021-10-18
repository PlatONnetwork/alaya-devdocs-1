(self.webpackChunkalaya_docs=self.webpackChunkalaya_docs||[]).push([[9875],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(t),d=r,h=k["".concat(p,".").concat(d)]||k[d]||m[d]||o;return t?n.createElement(h,i(i({ref:a},c),{},{components:t})):n.createElement(h,i({ref:a},c))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=k;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8963:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var n=t(2122),r=t(9756),o=(t(7294),t(3905)),i={id:"DApp_migrate",title:"DApp Migrate",sidebar_label:"DApp Migrate"},l=void 0,p={unversionedId:"DApp_migrate",id:"DApp_migrate",isDocsHomePage:!1,title:"DApp Migrate",description:"In order to better support developers in migrating Ethereum DApp to Alaya, This article will first introduce the difference between Alaya and Ethereum from the perspective of developers, then introduce the general idea of \u200b\u200bmigrating DApp, and finally will make specific introduction about DApp contract migration and front-end migration.",source:"@site/docs/DApp_migrate.md",sourceDirName:".",slug:"/DApp_migrate",permalink:"/alaya-devdocs/en/DApp_migrate",editUrl:"https://github.com/AlayaNetwork/alaya-devdocs/tree/main/website/docs/DApp_migrate.md",version:"current",frontMatter:{id:"DApp_migrate",title:"DApp Migrate",sidebar_label:"DApp Migrate"},sidebar:"docs",previous:{title:"Getting Started with JS SDK",permalink:"/alaya-devdocs/en/JS-Tutorials"},next:{title:"AlayScan",permalink:"/alaya-devdocs/en/AlayScan"}},s=[{value:"Difference between Alaya and Ethereum",id:"difference-between-alaya-and-ethereum",children:[]},{value:"DApp migration ideas",id:"dapp-migration-ideas",children:[]},{value:"DApp contract migration",id:"dapp-contract-migration",children:[]},{value:"DApp front-end interface migration",id:"dapp-front-end-interface-migration",children:[{value:"Update the way to connect to the wallet",id:"update-the-way-to-connect-to-the-wallet",children:[]},{value:"Update dependencies",id:"update-dependencies",children:[]},{value:"Modification of DApp own code",id:"modification-of-dapp-own-code",children:[]}]},{value:"Alaya development and debugging tools",id:"alaya-development-and-debugging-tools",children:[]},{value:"Metamask and uniswap migration experience summary",id:"metamask-and-uniswap-migration-experience-summary",children:[{value:"uniswap migration reference",id:"uniswap-migration-reference",children:[]}]}],c={toc:s};function m(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to better support developers in migrating Ethereum DApp to Alaya, This article will first introduce the difference between Alaya and Ethereum from the perspective of developers, then introduce the general idea of \u200b\u200bmigrating DApp, and finally will make specific introduction about DApp contract migration and front-end migration."),(0,o.kt)("h2",{id:"difference-between-alaya-and-ethereum"},"Difference between Alaya and Ethereum"),(0,o.kt)("p",null,"Dapp developers no need to pay attention to the differences in the underlying technology. But only need to note following differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The RPC methods exposed by Alaya and Ethereum are basically the same. The difference is the prefix of the rpc method name. The prefix of the Alaya network is ",(0,o.kt)("inlineCode",{parentName:"li"},"platon_")),(0,o.kt)("li",{parentName:"ul"},"The address type of the Alaya network is the ",(0,o.kt)("inlineCode",{parentName:"li"},"bech32")," address type, it is a string prefixed with ",(0,o.kt)("inlineCode",{parentName:"li"},"atp"),", which is different from the ",(0,o.kt)("inlineCode",{parentName:"li"},"0x")," prefix address of Ethereum"),(0,o.kt)("li",{parentName:"ul"},"Alaya's block generation is faster than Ethereum, which is about 1 second for a block, so the timestamp of the block in Alaya is in milliseconds, and the timestamp of the block in Ethereum is in seconds."),(0,o.kt)("li",{parentName:"ul"},"Alaya network currently does not have infrua similar services, currently there is only one ",(0,o.kt)("a",{parentName:"li",href:"https://openapi.alaya.network/rpc"},"https://openapi.alaya.network/rpc")," interface service externally")),(0,o.kt)("h2",{id:"dapp-migration-ideas"},"DApp migration ideas"),(0,o.kt)("p",null,"In order to successfully migrate DApp, you can refer to the following migration ideas:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First find out the main functions of the DApp itself, and sort the functions base on the function dependency relationship. Taking uniswap as an example, founctions dependency order is: connect to the samurai wallet -> swap UI able to display tokens and display balance -> able to create trading pairs and add liquidity -> able to swap successfully -> able to remove liquidity."),(0,o.kt)("li",{parentName:"ol"},'Follow the "DApp contract migration" section below to migrate DApp related contracts and deploy them to your Alaya test network.'),(0,o.kt)("li",{parentName:"ol"},'According to the first step, sort out the functional dependencies and the following "DApp front-end migration", and debug through each function.')),(0,o.kt)("h2",{id:"dapp-contract-migration"},"DApp contract migration"),(0,o.kt)("p",null,"The contract migration and modification points mainly are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Alaya supports four versions of solidity: 0.4.26, 0.5.17, 0.6.12, and 0.7.1. If you are migrating a contract with a version above 0.7.1, you need to reduce the version number and remove the syntax from the higher version. For example, you can use the 0.5.17 version with the following statement:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"pragma solidity ^0.5.17;\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The currency units in Alaya smart contracts are ATP and VON. To migrate Ethereum smart contracts to Alaya, change the currency of Ether to Alaya currency. And pay attention to the Ether/ATP market exchange rate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The 0x address is able to converted to the ATP address by the ",(0,o.kt)("inlineCode",{parentName:"p"},"keytool"),", and the 0x address is replacable by the atp address. Addresses to replaced is base on the business logic. Also use ",(0,o.kt)("inlineCode",{parentName:"p"},"address(uint160(0))")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"address(0)"),". E.g:"),(0,o.kt)("p",{parentName:"li"},"Change following statement:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) == address(0)) {\n    ...\n}\n")),(0,o.kt)("p",{parentName:"li"},"Into:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"if (IUniswapV2Factory(factory).getPair(tokenA, tokenB) ==\n    address(uint160(0))) \n{\n    ...\n}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Alaya smart contract, ",(0,o.kt)("inlineCode",{parentName:"p"},"block.timestamp")," represents the timestamp of the current block in milliseconds, while Ethereum uses seconds as the unit. Whether ",(0,o.kt)("inlineCode",{parentName:"p"},"block.timestamp")," needs to be modified or not is base on business logic. In the uniswap migration, the timestamp in the contract is not modified, but in front-end, the timeout period changed from seconds to milliseconds.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For contract development guidelines, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://devdocs.alaya.network/alaya-devdocs/en/EVM_Smart_Contract/"},"EVM Smart Contract")))),(0,o.kt)("h2",{id:"dapp-front-end-interface-migration"},"DApp front-end interface migration"),(0,o.kt)("h3",{id:"update-the-way-to-connect-to-the-wallet"},"Update the way to connect to the wallet"),(0,o.kt)("p",null,"Samurai use ",(0,o.kt)("inlineCode",{parentName:"p"},"window.alaya")," in order not to conflict with the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," of metamask. In addition, the interface with prefix of ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_")," was changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"platon_"),", for example: ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," was changed to ",(0,o.kt)("inlineCode",{parentName:"p"},"platon_requestAccounts"),". Therefore, the code to connect to the wallet needs to be modified. For Samurai developer documentation, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://devdocs.alaya.network/alaya-devdocs/en/Samurai_API"},"https://devdocs.alaya.network/alaya-devdocs/en/Samurai_API")," \u3002"),(0,o.kt)("p",null,"During the migration of uniswap, the injected-connector package of the project ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NoahZinsmeister/web3-react"},"https://github.com/NoahZinsmeister/web3-react")," was modified, please refer to the github commit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"https://github.com/")," AlayaNetwork/aswap-web3-react/commits/alaya-v6.1.1 ."),(0,o.kt)("h3",{id:"update-dependencies"},"Update dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the application itself is connected to the Ethereum node, in order to find problems in time, it needs to be modified to connect to the Alaya node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After connected to the Samurai wallet, debug each function according to the function business dependencies order, and locate the dependent packages that need to be modified according to the error output of the Chrome devtool console."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Many Dapp developments will need third-party npm packages of Ethereum. These packages may involve address related or rpc call related functions. These packages may not able to support your migration successfully. During the migration process of samurai and uniswap, we have modified and released some npm packages. You may consider replacing those packages with packages that support the Alaya network. If there's no existing package to use, you may need to consider making some modifications before publishing. Alaya's released dependency packages can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AlayaNetwork"},"Alaya github")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40alayanetwork"},"Alaya npm repository"),"."),(0,o.kt)("p",{parentName:"li"},"The list of released packages is as follows:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-method-registry"},"@alayanetwork/eth-method-registry")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-ens"},"@alayanetwork/ethjs-ens")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-simple-keyring"},"@alayanetwork/eth-simple-keyring")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-hd-keyring"},"@alayanetwork/eth-hd-keyring")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-query"},"@alayanetwork/ethjs-query")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-block-tracker"},"@alayanetwork/eth-block-tracker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-contract"},"@alayanetwork/ethjs-contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs"},"@alayanetwork/ethjs")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-format"},"@alayanetwork/ethjs-format")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-json-rpc-filters"},"@alayanetwork/eth-json-rpc-filters")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/nonce-tracker"},"@alayanetwork/nonce-tracker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-provider-engine"},"@alayanetwork/web3-provider-engine")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-abi"},"@alayanetwork/ethjs-abi")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-http"},"@alayanetwork/web3-providers-http")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-net"},"@alayanetwork/web3-net")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-ws"},"@alayanetwork/web3-providers-ws")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-utils"},"@alayanetwork/web3-utils")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-helpers"},"@alayanetwork/web3-core-helpers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethereumjs-util"},"@alayanetwork/ethereumjs-util")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-contract"},"@alayanetwork/web3-eth-contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-keyring-controller"},"@alayanetwork/eth-keyring-controller")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-subscriptions"},"@alayanetwork/web3-core-subscriptions")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-abi"},"@alayanetwork/web3-eth-abi")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth"},"@alayanetwork/web3-eth")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethereumjs-tx"},"@alayanetwork/ethereumjs-tx")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-iban"},"@alayanetwork/web3-eth-iban")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-providers-ipc"},"@alayanetwork/web3-providers-ipc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-accounts"},"@alayanetwork/web3-eth-accounts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-personal"},"@alayanetwork/web3-eth-personal")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-eth-ens"},"@alayanetwork/web3-eth-ens")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-sig-util"},"@alayanetwork/eth-sig-util")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethjs-schema"},"@alayanetwork/ethjs-schema")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/rpc-cap"},"@alayanetwork/rpc-cap")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-token-tracker"},"@alayanetwork/eth-token-tracker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/etherscan-link"},"@alayanetwork/etherscan-link")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/uniswap-v2-periphery"},"@alayanetwork/uniswap-v2-periphery")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-query"},"@alayanetwork/eth-query")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/controllers"},"@alayanetwork/controllers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/inpage-provider"},"@alayanetwork/inpage-provider")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/forwarder"},"@alayanetwork/forwarder")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/eth-json-rpc-middleware"},"@alayanetwork/eth-json-rpc-middleware")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/uniswap-sdk"},"@alayanetwork/uniswap-sdk")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ganache-core"},"@alayanetwork/ganache-core")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-promievent"},"@alayanetwork/web3-core-promievent")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-requestmanager"},"@alayanetwork/web3-core-requestmanager")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core-method"},"@alayanetwork/web3-core-method")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-core"},"@alayanetwork/web3-core")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3"},"@alayanetwork/web3")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-react-core"},"@alayanetwork/web3-react-core")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/web3-react-injected-connector"},"@alayanetwork/web3-react-injected-connector")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-solidity"},"@alayanetwork/ethers-solidity")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-contracts"},"@alayanetwork/ethers-contracts")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-bytes"},"@alayanetwork/ethers-bytes")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-abi"},"@alayanetwork/ethers-abi")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-providers"},"@alayanetwork/ethers-providers")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/ethers-address"},"@alayanetwork/ethers-address")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@alayanetwork/token-lists"},"@alayanetwork/token-lists"))))),(0,o.kt)("h3",{id:"modification-of-dapp-own-code"},"Modification of DApp own code"),(0,o.kt)("h4",{id:"rpc-method-and-parameters-of-alaya-backend"},"RPC method and parameters of Alaya backend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The RPC method supported by the Alaya network starts with platon_ (such as: platon","_","sendTransaction)"),(0,o.kt)("li",{parentName:"ul"},"The parameter types of some specific rpc interfaces may be inconsistent, especially the address type. Best thing to do is to refer to Alaya's ","[Developer Documentation]"," when developing(",(0,o.kt)("a",{parentName:"li",href:"https://devdocs.alaya.network/alaya-devdocs/en/Json_Rpc/"},"https://devdocs.alaya.network/alaya-devdocs/en/Json_Rpc/"),")")),(0,o.kt)("h4",{id:"about-address"},"About Address"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When calling RPC, if the parameter is an address type, you need to make sure to use bech32 address type. For example, if a contract address of 0x is obtained in the program, it needs to be converted into a bech32 address before use, as shown in the following code:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"if (pair?.liquidityToken?.address) {\n    const hrp = chainId.toString() === '201018'? 'atp': 'atx';\n    contractAddress = toBech32Address(hrp,pair.liquidityToken.address)\n}\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When it comes to encoding parameters (such as encodeParam method), you may need to consider converting the bech32 address type parameter to 0x type before encoding, the address check also needs to be modified. For example, the following logic is added when encoding uniswap contract parameters:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"if (callInputs) {\n    callInputs = callInputs.map(callInput => {\n      if (typeof callInput === 'string' && isBech32Address(callInput))       {\n        return decodeBech32Address(callInput)\n      } else {\n        return callInput\n      }\n    })\n}\n")))),(0,o.kt)("h2",{id:"alaya-development-and-debugging-tools"},"Alaya development and debugging tools"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://devdocs.alaya.network/alaya-devdocs/en/"},"Alaya Development Documentation")),(0,o.kt)("h2",{id:"metamask-and-uniswap-migration-experience-summary"},"Metamask and uniswap migration experience summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dapp generally has some feature sets. We can divide milestones according to these features. For example, for metamask:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Successfully import mnemonic words or create a wallet to enter the main UI"),(0,o.kt)("li",{parentName:"ul"},"Enter the main UI, the address shows the bech32 address and the balance can be successfully obtained and displayed"),(0,o.kt)("li",{parentName:"ul"},"Able to successfully send native tokens from one account to another account"),(0,o.kt)("li",{parentName:"ul"},"Able to search for tokens and add them successfully, displaying the balance of tokens"),(0,o.kt)("li",{parentName:"ul"},"Token can be sent successfully")),(0,o.kt)("p",{parentName:"li"},"In each of these milestones, most of the problems that appear may be the problems mentioned above that require attention. We can directly modify the source code of packages to make the whole process working, and then save the modification of packages for release packages later.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Normally, the core business process of Dapp are no need to change, but we still have to try to understand the basic business flow, which is beneficial for debugging.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Observe whether there are any network requests and the result of the network requests in the browser developer tool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In some cases, the actual error may be intercepted and processed in a certain place. The error finally seen is not the error originally thrown. In this case, you will need to debug to find out the initial error message and stack trace before processing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Some errors may be tricky if you don\u2019t have enough understanding of the alaya network or even the underlying knowledge. In this case, it is recommended to consult or discuss with experienced developers in the community."))),(0,o.kt)("h3",{id:"uniswap-migration-reference"},"uniswap migration reference"),(0,o.kt)("p",null,"Uniswap migration reference front-end project\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/treelaketreelake/swap-frontend"},"https://github.com/treelaketreelake/swap-frontend")),(0,o.kt)("p",null,"Uniswap migration reference contract project\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/treelaketreelake/swap-contracts"},"https://github.com/treelaketreelake/swap-contracts")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"English Translation Contributors @",(0,o.kt)("a",{parentName:"em",href:"https://github.com/WillXing"},"WillXing"))))}m.isMDXComponent=!0}}]);