"use strict";exports.id=6879,exports.ids=[6879],exports.modules={76879:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ClientAnnualFailedModule:()=>ClientAnnualFailedModule});var common=__webpack_require__(14565),ngx_button_module=__webpack_require__(28680),ngx_image_module=__webpack_require__(10044),ngx_link_module=__webpack_require__(62191),ngx_icon_module=__webpack_require__(61230),router=__webpack_require__(16055),ngx_button_theme_enum=__webpack_require__(38194),ngx_link_theme_enum=__webpack_require__(66852),core=__webpack_require__(77533),ngx_link_service=__webpack_require__(77406),ngx_icon_directive=__webpack_require__(93475),ngx_link_directive=__webpack_require__(11528);const routes=[{path:"",component:(()=>{class ClientAnnualFailedComponent2{constructor(b2bNgxLinkService){this.b2bNgxLinkService=b2bNgxLinkService,this.b2bNgxLinkThemeEnum=ngx_link_theme_enum.L,this.b2bNgxButtonThemeEnum=ngx_button_theme_enum.n}static#_=this.\u0275fac=function(t){return new(t||ClientAnnualFailedComponent2)(core.Y36(ngx_link_service.H))};static#_2=this.\u0275cmp=core.Xpm({type:ClientAnnualFailedComponent2,selectors:[["b2b-client-annual-failed"]],decls:10,vars:4,consts:[[1,"payment-failed"],["b2bNgxIcon","","name","payment-failed",1,"image"],[1,"title"],[1,"description"],[1,"buttons"],["b2bNgxLink","",1,"try-again",3,"routerLink","theme"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core._UZ(1,"img",1),core.TgZ(2,"p",2),core._uU(3,"Payment failed"),core.qZA(),core.TgZ(4,"p",3),core._uU(5," Oops! Something went wrong! Unfortunately, the payment failed. Please check the information you entered and try again. "),core.qZA(),core.TgZ(6,"div",4)(7,"a",5),core.ALo(8,"async"),core._uU(9,"Try again"),core.qZA()()()),2&rf&&(core.xp6(7),core.Q6J("routerLink",core.lcZ(8,2,ctx.b2bNgxLinkService.getLink("/annual-payment")))("theme",ctx.b2bNgxLinkThemeEnum.BACKGROUND_BLACK))},dependencies:[router.rH,ngx_icon_directive.p,ngx_link_directive.a,common.Ov],styles:['.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-opened.ng-select-right[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0}.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-left[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px #00000013,0 0 0 3px #007eff1a}.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px #0000000f}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;color:#333;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{color:#000}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#d0021b}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:focus   .ng-clear[_ngcontent-%COMP%]{color:#d0021b}.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:focus{outline:none}.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px #0000000f;left:0}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]{left:100%;top:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-right[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]{left:-100%;top:0;border-top-left-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-left[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:#0000008a;cursor:pointer}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#0000008a;background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:#000000de;padding:8px 10px}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}[dir=rtl][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{scroll-behavior:auto!important}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:"";content:none}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{margin:0;font-family:Inter,sans-serif}*[_ngcontent-%COMP%]{box-sizing:border-box}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}a[_ngcontent-%COMP%]:visited{color:#000}button[_ngcontent-%COMP%]{box-shadow:none;border:none;cursor:pointer}textarea[_ngcontent-%COMP%]{border:none}i[_ngcontent-%COMP%]{font-style:Italic}b[_ngcontent-%COMP%]{font-weight:700}.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{box-shadow:none}  form b2b-ngx-select.ng-invalid ng-select.ng-touched .ng-select-container{background-color:#e63d3d0d;border-color:#e63d3d!important}  form.form-submitted b2b-ngx-select.ng-invalid .ng-select-container{background-color:#e63d3d0d;border-color:#e63d3d!important}  form b2b-ngx-country-select.ng-invalid ng-select.ng-touched .ng-select-container{background-color:#e63d3d0d;border-color:#e63d3d!important}  form.form-submitted b2b-ngx-country-select.ng-invalid .ng-select-container{background-color:#e63d3d0d;border-color:#e63d3d!important}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:2px solid transparent;height:49px}.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{border:none;box-shadow:0 2px 8px #0f0f111a;border-radius:4px}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{background:#f3f4f6}.ng-select.ng-select-single.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-gray[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%]{background-color:#d1d5db}.ng-select.ng-select-single.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-gray.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{background-color:#e63d3d0d;border-color:#e63d3d}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{background:#fff}.ng-select.ng-select-single.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-white[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%]{background-color:#fff}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{text-decoration:underline}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%], .ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{background:transparent}.ng-select.ng-select-single.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select.ng-select-multiple.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%], .ng-select-opened.background-transparent[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-option-marked[_ngcontent-%COMP%]{background-color:transparent}.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-left:10px;top:15px}.b2b-ngx-button[_ngcontent-%COMP%]{border:.16rem solid transparent;border-radius:.25rem}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]{background-color:#0f0f11;color:#fff}.b2b-ngx-button.background.background-black[_ngcontent-%COMP%]:hover{background-color:#2e2e34}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]{background-color:#fff;color:#0f0f11;box-shadow:0 .25rem 1rem #0a083a1a}.b2b-ngx-button.background.background-white[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]{background-color:#e63d3d;color:#fff;box-shadow:0 .25rem 1rem #0a083a1a}.b2b-ngx-button.background.background-red[_ngcontent-%COMP%]:hover{background-color:#e63d3d}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]{background-color:transparent;color:#0f0f11}.b2b-ngx-button.background.background-transparent[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]{background-color:#005dff;color:#fff}.b2b-ngx-button.background.background-blue[_ngcontent-%COMP%]:hover{background-color:#5995fe}.b2b-ngx-button.background.background-gray[_ngcontent-%COMP%]{background-color:#d9d9d9;color:#000}.b2b-ngx-button.background.background-gray[_ngcontent-%COMP%]:hover{background-color:#0f0f11;color:#fff}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]{border-color:#dfe8f5;transition:.2s}.b2b-ngx-button.background.background-hover-black[_ngcontent-%COMP%]:hover{background-color:#0f0f11;border-color:#0f0f11;color:#fff}.b2b-ngx-button.outline[_ngcontent-%COMP%]{outline-style:none}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]{border-color:#0f0f11}.b2b-ngx-button.outline.outline-black[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]{border-color:#fff}.b2b-ngx-button.outline.outline-white[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]{border-color:#005dff}.b2b-ngx-button.outline.outline-blue[_ngcontent-%COMP%]:hover{background-color:#5995fe}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]{border-color:#dfe8f5}.b2b-ngx-button.outline.outline-gray[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-button[_ngcontent-%COMP%]:disabled{background-color:#b1b1b199!important;color:#fff!important}.b2b-ngx-button[_ngcontent-%COMP%]:disabled:hover{background-color:#b1b1b199!important}.b2b-ngx-link[_ngcontent-%COMP%]{transition:.5s;border:1px solid transparent}.b2b-ngx-link.text.text-blue[_ngcontent-%COMP%]{color:#005dff}.b2b-ngx-link.text.text-black[_ngcontent-%COMP%]{color:#0f0f11}.b2b-ngx-link.text.text-white[_ngcontent-%COMP%]{color:#fff}.b2b-ngx-link.text.text-gray[_ngcontent-%COMP%]{color:#556274}.b2b-ngx-link.text[_ngcontent-%COMP%]:hover{text-decoration:underline}.b2b-ngx-link.background[_ngcontent-%COMP%]{border:.16rem solid transparent}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]{background-color:#fff;color:#0f0f11}.b2b-ngx-link.background.background-white[_ngcontent-%COMP%]:hover{background-color:#e3eaf1}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]{background-color:transparent;color:#0f0f11}.b2b-ngx-link.background.background-transparent[_ngcontent-%COMP%]:hover{background-color:#f3f6f8}.b2b-ngx-link.background.background-gray[_ngcontent-%COMP%]{background-color:#005dff;color:#fff}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]{background-color:#0f0f11;color:#fff}.b2b-ngx-link.background.background-black[_ngcontent-%COMP%]:hover{background-color:#2e2e34}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]{background-color:#005dff;color:#fff}.b2b-ngx-link.background.background-blue[_ngcontent-%COMP%]:hover{background-color:#5995fe}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]{background:#eff4fa;border-radius:4px}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#005dff!important}.b2b-ngx-link.background.background-light-blue[_ngcontent-%COMP%]:hover{background:#e6edfa}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]{border-color:#fff}.b2b-ngx-link.outline.outline-white[_ngcontent-%COMP%]:hover{background-color:#2e2e34}.b2b-ngx-input-label[_ngcontent-%COMP%]{display:block;font-size:14px;color:#9fa4bb;margin-bottom:6px}.b2b-ngx-input[_ngcontent-%COMP%]{border:.16rem solid transparent;border-radius:.25rem;padding:14px 16px;width:100%;font-size:14px;color:#556274}.b2b-ngx-input.background.background-gray[_ngcontent-%COMP%]{color:#6c7077;background-color:#f3f6f8}.b2b-ngx-input.background.background-white[_ngcontent-%COMP%]{background-color:#fff}.b2b-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-submitted[_ngcontent-%COMP%]   .b2b-ngx-input.background.ng-invalid[_ngcontent-%COMP%]{background-color:#e63d3d0d;border-color:#e63d3d}.ngx-input-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.globy-ngx-input-label[_ngcontent-%COMP%]{display:block;font-size:14px;color:#556274}.globy-ngx-input[_ngcontent-%COMP%]{border:1px solid #C6D1E2;border-radius:.25rem;padding:14px 16px;width:100%;font-size:14px;color:#000}.globy-ngx-input.background.background-gray[_ngcontent-%COMP%]{color:#6c7077;background-color:#f3f6f8}.globy-ngx-input.background.background-white[_ngcontent-%COMP%]{background-color:#fff0}.globy-ngx-input.ng-invalid.ng-touched[_ngcontent-%COMP%], .form-submitted[_ngcontent-%COMP%]   .globy-ngx-input.background.ng-invalid[_ngcontent-%COMP%]{background-color:#e63d3d0d;border-color:#e63d3d}.b2b-ngx-icon.circle[_ngcontent-%COMP%]{height:3rem;width:3rem;background-color:#f3f6f8;border-radius:100%;display:flex;justify-content:center;align-items:center}.b2b-ngx-textarea-label[_ngcontent-%COMP%]{display:block;font-size:14px;color:#9fa4bb;margin-bottom:6px}.b2b-ngx-textarea[_ngcontent-%COMP%]{display:block;width:100%;background:#f3f6f8;border-radius:4px;font-size:14px;color:#556274;padding:14px 16px;border:2px solid transparent;resize:none}.b2b-ngx-textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{background-color:#e63d3d0d;border-color:#e63d3d}.b2b-ngx-textarea.background.background-gray[_ngcontent-%COMP%]{color:#6c7077;background-color:#f3f6f8}.b2b-ngx-textarea.background.background-white[_ngcontent-%COMP%]{background-color:#fff}.form-submitted[_ngcontent-%COMP%]   .b2b-ngx-textarea.ng-invalid[_ngcontent-%COMP%]{background-color:#e63d3d0d;border-color:#e63d3d}.control-error[_ngcontent-%COMP%]{display:block;font-size:14px;color:#6c707799;margin-top:4px}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]{pointer-events:none;width:100%;justify-content:flex-start}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;align-items:center;justify-content:flex-end;gap:7px;padding:0}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:24px;color:#c4c4c4}@media (max-width: 36em){.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%]{font-size:11px}}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-label-selected[_ngcontent-%COMP%]{color:#000}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]{width:10px;height:10px;background-color:#d9d9d9;margin:0}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:#005dff}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%]   .mat-step-icon-content[_ngcontent-%COMP%]{display:none}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:first-child{align-items:flex-start}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:last-child{align-items:flex-end}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]{border:2px solid #D9D9D9}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:first-of-type{margin:0 -7% 0 -10%;background-image:linear-gradient(90deg,#005dff,#005dff00);background-color:#d9d9d9;box-sizing:content-box;height:4px;border:none}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-stepper-header-container[_ngcontent-%COMP%]   .mat-stepper-horizontal-line[_ngcontent-%COMP%]:last-of-type{margin:0 -23% 0 -7%}.mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-horizontal-content-container[_ngcontent-%COMP%]{padding:0;overflow:initial}.mat-stepper-horizontal[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%]   .mat-step-header[_ngcontent-%COMP%]:hover{background-color:transparent!important}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%] + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2){background-color:#005dff;border-color:transparent}.last-edited-step-1[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%] + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4){background-image:linear-gradient(90deg,#005dff,#005dff00);background-color:#d9d9d9;box-sizing:content-box;height:4px;border:none}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%] + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(2){background-color:#005dff;border-color:transparent}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%] + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(4){background-image:linear-gradient(90deg,#005dff,#005dff00);background-color:#d9d9d9;box-sizing:content-box;height:4px;border:none;background-color:#005dff;border-color:transparent}.last-edited-step-2[_ngcontent-%COMP%]   .mat-horizontal-stepper-header[_ngcontent-%COMP%] + .mat-stepper-horizontal-line[_ngcontent-%COMP%]:nth-child(6){background-image:linear-gradient(90deg,#005dff,#005dff00);background-color:#d9d9d9;box-sizing:content-box;height:4px;border:none}  .contact-supplier-form-dialog{width:729px;max-width:729px;max-height:96vh}  .contact-supplier-form-dialog .mat-dialog-container{border-radius:15px}@media (max-width: 600px){  .contact-supplier-form-dialog{max-width:100%!important;width:100%;height:100%;max-height:100%}  .contact-supplier-form-dialog .mat-dialog-container{border-radius:0}}  mat-month-view table tbody tr td button .mat-calendar-body-selected{background:#005dff}  mat-month-view table tbody tr td button .mat-calendar-body-cell-content{border-radius:0}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]{height:100%;min-height:calc(100vh - 331px);display:flex;flex-direction:column;align-items:center;justify-content:center}@media (max-width: 55.5em){[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]{min-height:calc(100vh - 72px)}}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:75px;height:71px}@media (max-width: 55.5em){[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{width:258px;height:93px}}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;font-size:32px;line-height:36px;text-align:center;letter-spacing:.01em;color:#0f0f11;margin-top:16px}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:8px;width:408px;font-size:16px;line-height:148%;text-align:center;letter-spacing:.01em;color:#556274}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{margin-top:24px;display:flex}[_nghost-%COMP%]   .payment-failed[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .try-again[_ngcontent-%COMP%]{display:block;padding:.9rem 2.5rem;border-radius:4px}'],changeDetection:0})}return ClientAnnualFailedComponent2})()}];let ClientAnnualFailedRoutingModule=(()=>{class ClientAnnualFailedRoutingModule2{static#_=this.\u0275fac=function(t){return new(t||ClientAnnualFailedRoutingModule2)};static#_2=this.\u0275mod=core.oAB({type:ClientAnnualFailedRoutingModule2});static#_3=this.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]})}return ClientAnnualFailedRoutingModule2})(),ClientAnnualFailedModule=(()=>{class ClientAnnualFailedModule2{static#_=this.\u0275fac=function(t){return new(t||ClientAnnualFailedModule2)};static#_2=this.\u0275mod=core.oAB({type:ClientAnnualFailedModule2});static#_3=this.\u0275inj=core.cJS({imports:[common.ez,ClientAnnualFailedRoutingModule,ngx_image_module.A,ngx_icon_module.w,ngx_button_module.l,ngx_link_module.W]})}return ClientAnnualFailedModule2})()}};