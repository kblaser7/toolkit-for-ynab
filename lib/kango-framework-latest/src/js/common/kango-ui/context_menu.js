function ContextMenuItemBase(){EventTarget.call(this)}function getPublicApi(){return utils.createApiWrapper(module.exports,ContextMenuItemBase.prototype,IEventTarget.prototype)}var utils=require("kango/utils"),object=utils.object,EventTarget=utils.EventTarget,IEventTarget=utils.IEventTarget;ContextMenuItemBase.prototype=object.extend(EventTarget,{event:{CLICK:"click"}});