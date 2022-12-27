"use strict";(self.webpackChunkinvoive=self.webpackChunkinvoive||[]).push([[3001,9356],{3001:function(e,t,n){n.r(t),n.d(t,{useCustomerContext:function(){return m}});var s=n(4942),i=n(1413),a=n(885),o=n(4569),r=n.n(o),u=n(2791),c=n(7689),l=n(9356),d=n(184),f=(0,u.createContext)(),m=function(){return(0,u.useContext)(f)};t.default=function(e){var t=e.children,n=(0,c.s0)(),o=(0,l.UseGlobalContext)().setSnackbar,m=(0,u.useState)({billing_address:{place_of_supply:"INTERNATIONAL"},shipping_address:{place_of_supply:"INTERNATIONAL"}}),p=(0,a.Z)(m,2),v=p[0],g=p[1],h=(0,u.useState)(!1),Z=(0,a.Z)(h,2),_=Z[0],b=Z[1],C=(0,u.useState)([]),x=(0,a.Z)(C,2),k=x[0],S=x[1],A=(0,u.useCallback)((function(){r().get("https://finance.miratsoneservices.com/api/get-customer").then((function(e){S(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[k]);(0,u.useEffect)((function(){A()}),[]);var y={handleChange:function(e){g((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,s.Z)({},e.target.name,e.target.value))}))},disableBTN:_,setDisableBTN:b,customerInputData:v,getAllCustomerData:A,setCustomerInputData:g,customerBillingAddressChange:function(e){g((function(t){return(0,i.Z)((0,i.Z)({},t),{},{billing_address:(0,i.Z)((0,i.Z)({},t.billing_address),{},(0,s.Z)({},e.target.name,e.target.value))})}))},customerShippingAddressChange:function(e){g((function(t){return(0,i.Z)((0,i.Z)({},t),{},{shipping_address:(0,i.Z)((0,i.Z)({},t.shipping_address),{},(0,s.Z)({},e.target.name,e.target.value))})}))},submitAddCustomer:function(){console.log("submit"),b(!0),n("/clients"),r().post("https://finance.miratsoneservices.com/api/create-customer",v).then((function(e){console.log(e.data),r().post("https://finance.miratsoneservices.com/api/create-tax-information",(0,i.Z)({customer_id:e.data.customer_id},null===v||void 0===v?void 0:v.tax_information)),r().post("https://finance.miratsoneservices.com/api/create-billing-address",(0,i.Z)({customer_id:e.data.customer_id},null===v||void 0===v?void 0:v.billing_address)),r().post("https://finance.miratsoneservices.com/api/create-shipping_address",(0,i.Z)({customer_id:e.data.customer_id},null===v||void 0===v?void 0:v.shipping_address)),r().post("https://finance.miratsoneservices.com/api/create-customer-bank-details",(0,i.Z)({customer_id:e.data.customer_id},null===v||void 0===v?void 0:v.bank_details)).then((function(e){return A()}),b(!1),o({open:!0,severity:"success",msg:"Customer Added Successfully!"}))})).catch((function(e){return console.log(e)}))},allCustomerData:k,setAllCustomerData:S};return(0,d.jsx)(f.Provider,{value:y,children:t})}},9356:function(e,t,n){n.r(t),n.d(t,{UseGlobalContext:function(){return v}});var s=n(1413),i=n(2982),a=n(885),o=n(4569),r=n.n(o),u=n(276),c=n(2791),l=n(5933),d=n(5646),f=n(9658),m=n(184),p=(0,c.createContext)(),v=function(){return(0,c.useContext)(p)};t.default=function(e){var t=e.children,n=(0,c.useState)([]),o=(0,a.Z)(n,2),v=o[0],g=o[1],h=(0,c.useState)({open:!1,severity:"",msg:""}),Z=(0,a.Z)(h,2),_=Z[0],b=Z[1],C=(0,c.useState)([]),x=(0,a.Z)(C,2),k=x[0],S=x[1],A=(0,c.useState)([]),y=(0,a.Z)(A,2),D=(y[0],y[1],(0,c.useState)(!1)),I=(0,a.Z)(D,2),N=I[0],T=I[1],B=function(){r().get("https://finance.miratsoneservices.com/api/get-bank-transaction").then((function(e){g(null===e||void 0===e?void 0:e.data)}))};(0,c.useEffect)((function(){B(),(0,u.aF)((0,u.iH)(l.tO,(0,u.iH)("bank_statement"))).then((function(e){e.prefixes.forEach((function(e){S((function(t){return[].concat((0,i.Z)(t),[e.name])}))})),e.items.forEach((function(e){console.log(e)}))}))}),[]);var E={bankTransaction:v,name:"sonumonu",getingImgFromFolder:k,setGetingImgFromFolder:S,getBankTransaction:B,setSnackbar:b,disableBtn:N,setDisableBtn:T},j=c.forwardRef((function(e,t){return(0,m.jsx)(f.Z,(0,s.Z)({elevation:6,ref:t,variant:"filled"},e))})),w=function(e,t){"clickaway"!==t&&b({open:!1})};return(0,m.jsxs)(p.Provider,{value:E,children:[t,(0,m.jsx)(d.Z,{open:null===_||void 0===_?void 0:_.open,autoHideDuration:4e3,onClose:w,children:(0,m.jsx)(j,{onClose:w,severity:null===_||void 0===_?void 0:_.severity,sx:{width:"100%"},children:null===_||void 0===_?void 0:_.msg})})]})}}}]);
//# sourceMappingURL=3001.f63f706d.chunk.js.map