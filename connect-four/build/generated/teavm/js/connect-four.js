"use strict";
var main;(function($rt_globals){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end
=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData
=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data){var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data){var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data)
{var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data)
{var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data){var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta
={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum
=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache
===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long",
"J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double","D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex)
{throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException
=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,
javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,
arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+
1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),
arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i
=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value)
{if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)
===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr
=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i
=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum
=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName
:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f){return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,
p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i)
{javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new $rt_globals.DataView(new $rt_globals.ArrayBuffer(8));var $rt_doubleToLongBits;var $rt_longBitsToDouble;if
(typeof $rt_globals.BigInt!=='function'){$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else {$rt_doubleToLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,
true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){var hi=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n>>$rt_globals.BigInt(32)));var lo=$rt_globals.Number($rt_globals.BigInt.asIntN(32,n&$rt_globals.BigInt(0xFFFFFFFF)));$rt_numberConversionView.setInt32(0,lo,true);$rt_numberConversionView.setInt32(4,hi,true);return $rt_numberConversionView.getFloat64(0,
true);};}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,
JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage.toString();}}return this[defaultMessage];}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e)
{return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item)
{++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName
+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if
(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val, -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val
|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};Long_fromInt=function(val){return $rt_globals.BigInt(val);};Long_fromNumber=function(val)
{return $rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv
=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function()
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.bi=f;}
function $rt_cls(cls){return A.E5(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A.F3(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.n.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return A.A; }
function $rt_stecls(){return A.A;}
function $rt_throwableMessage(t){return A.FY(t);}
function $rt_throwableCause(t){return A.F0(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A.Gf());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A.Gg(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var E=$rt_throw;var V=$rt_compare;var Bm=$rt_nullCheck;var I=$rt_cls;var M=$rt_createArray;var Bj=$rt_isInstance;var Bn=$rt_nativeThread;var Bo=$rt_suspending;var Bp=$rt_resuming;var Bq=$rt_invalidPointer;var B=$rt_s;var K=$rt_eraseClinit;var R=$rt_imul;var Be=$rt_wrapException;var Br=$rt_checkBounds;var Bs=$rt_checkUpperBound;var Bt=$rt_checkLowerBound;var Bu=$rt_wrapFunction0;var Bv=$rt_wrapFunction1;var Bw=$rt_wrapFunction2;var Bx=$rt_wrapFunction3;var By=$rt_wrapFunction4;var C=$rt_classWithoutFields;var Ba
=$rt_createArrayFromData;var Bz=$rt_createCharArrayFromData;var BA=$rt_createByteArrayFromData;var BB=$rt_createShortArrayFromData;var Bh=$rt_createIntArrayFromData;var BC=$rt_createBooleanArrayFromData;var BD=$rt_createFloatArrayFromData;var BE=$rt_createDoubleArrayFromData;var Bd=$rt_createLongArrayFromData;var BF=$rt_createBooleanArray;var Y=$rt_createByteArray;var BG=$rt_createShortArray;var N=$rt_createCharArray;var Q=$rt_createIntArray;var Bl=$rt_createLongArray;var BH=$rt_createFloatArray;var BI=$rt_createDoubleArray;var V
=$rt_compare;var BJ=$rt_castToClass;var BK=$rt_castToInterface;var BL=Long_toNumber;var D=Long_fromInt;var BM=Long_fromNumber;var G=Long_create;var S=Long_ZERO;var BN=Long_hi;var Bc=Long_lo;
A.A=function(){this.$id$=0;};
A.Gh=function(){var a=new A.A();A.Ew(a);return a;};
A.Ew=function(a){};
A.CI=function(a){return A.E5(a.constructor);};
A.FU=function(a){return A.CR(a);};
A.Fs=function(a,b){return a!==b?0:1;};
A.FD=function(a){var b,c,d,e,f,g,h,i,j;b=A.CR(a);if(!b)c=B(0);else{d=(((32-A.D3(b)|0)+4|0)-1|0)/4|0;e=N(d);f=e.data;g=(d-1|0)*4|0;h=0;while(g>=0){i=h+1|0;f[h]=A.Cg(b>>>g&15,16);g=g-4|0;h=i;}c=A.F3(e);}j=A.E();A.B(A.B(j,B(1)),c);return A.D(j);};
A.CR=function(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;};
A.FS=function(a){var b,c,d;if(!Bj(a,A.Bg)&&a.constructor.$meta.item===null){b=new A.CL;A.H(b);E(b);}b=A.Fx(a);c=b;d=$rt_nextId();c.$id$=d;return b;};
A.Cb=C();
A.Gi=null;A.Gj=null;A.EP=function(){var b,c;b=A.Gj;c=$rt_ustr(A.DL(A.DL(A.Dn(A.Gi),B(2),B(3)),B(4),B(5)));b.innerHTML=c;};
A.F_=function(b){var c,d,e,f,g,h;A.E6();A.Et();A.EU();A.EK();A.Er();A.Ep();A.Em();A.E4();A.ES();A.EE();A.ED();A.E_();A.Fa();c=new A.DY;d=new A.C6;e=new A.DB;d.bT=6;d.bf=e;e=A.Cw();f=A.Es(7,6,4,A.FP(42),A.FP(42));c.f=f;b=M(A.Co,2);g=b.data;g[0]=null;h=new A.Cz;A.Ew(h);h.x=f;h.bv=d;g[1]=h;c.bY=b;c.bW=1;c.s=e;A.Gi=c;e=$rt_globals.window.document;d=e.getElementById("col");c=A.N();f=$rt_str(d.value);h=A.E();A.B(A.B(h,B(6)),f);A.O(c,A.D(h));c=e.getElementById("play");f=new A.CT;f.bx=d;f.bw=e;c.addEventListener("click",
A.Fw(f,"handleEvent"));A.Gj=e.getElementById("board-display");A.EP();A.O(A.N(),B(7));c=A.Gi;A.DE(c);A.Cr(c);};
A.Df=C(0);
A.CM=C(0);
A.Dy=function(){A.A.call(this);this.ba=null;};
A.E5=function(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new A.Dy;c.ba=b;d=c;b.classObject=d;}return c;};
A.CU=function(a){return A.E5(a.ba.$meta.item);};
A.EX=C();
A.Fw=function(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();};
A.Cs=function(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;};
A.EC=C();
A.Fx=function(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;};
A.X=C(0);
A.R=C(0);
A.BA=C(0);
A.BJ=function(){var a=this;A.A.call(a);a.n=null;a.G=0;};
A.Gk=null;A.F3=function(a){var b=new A.BJ();A.EO(b,a);return b;};
A.FJ=function(a,b,c){var d=new A.BJ();A.Fh(d,a,b,c);return d;};
A.EO=function(a,b){var c,d,e,f;b=b.data;c=b.length;d=N(c);e=d.data;a.n=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}};
A.Fh=function(a,b,c,d){var e,f,g;e=N(d);f=e.data;a.n=e;g=0;while(g<d){f[g]=b.data[g+c|0];g=g+1|0;}};
A.Q=function(a,b){var c,d;if(b>=0){c=a.n.data;if(b<c.length)return c[b];}d=new A.B1;A.H(d);E(d);};
A.K=function(a){return a.n.data.length;};
A.B8=function(a){return a.n.data.length?0:1;};
A.DL=function(a,b,c){var d,e,f,g,h;d=A.E();e=A.K(a)-A.K(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=A.K(b)){A.B(d,c);f=f+(A.K(b)-1|0)|0;break a;}if(A.Q(a,f+g|0)!=A.Q(b,g))break;g=g+1|0;}A.I(d,A.Q(a,f));}f=f+1|0;}h=A.K(a);if(f>h){b=new A.L;A.H(b);E(b);}A.B(d,A.FJ(a.n,f,h-f|0));return A.D(d);};
A.FA=function(a){return a;};
A.DW=function(b){var c,d,e,f,g;if(b===null)b=B(8);else{c=b.i;if(!c)b=B(9);else{d=c-1|0;e=new A.CZ;A.Ds(e,c*16|0);A.I(e,91);f=0;while(f<d){g=b.m.data;A.B0(A.B(e,g[f]!==b?g[f]:B(10)),B(11));f=f+1|0;}g=b.m.data;A.B(e,g[d]!==b?g[d]:B(10));b=A.D(A.I(e,93));}}return b;};
A.F1=function(a,b){var c;if(a===b)return 1;if(!(b instanceof A.BJ))return 0;if(A.K(b)!=A.K(a))return 0;c=0;while(c<A.K(b)){if(A.Q(a,c)!=A.Q(b,c))return 0;c=c+1|0;}return 1;};
A.FV=function(a){var b,c,d,e;a:{if(!a.G){b=a.n.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.G=(31*a.G|0)+e|0;d=d+1|0;}}}return a.G;};
A.E6=function(){A.Gk=new A.CG;};
A.Br=function(){var a=this;A.A.call(a);a.bU=null;a.bS=null;a.W=0;a.bh=0;};
A.Gl=function(a){var b=new A.Br();A.G(b,a);return b;};
A.Gm=function(a){var b=new A.Br();A.E3(b,a);return b;};
A.G=function(a,b){a.W=1;a.bh=1;a.bU=b;};
A.E3=function(a,b){a.W=1;a.bh=1;a.bS=b;};
A.FG=function(a){return a;};
A.FY=function(a){return a.bU;};
A.F0=function(a){var b;b=a.bS;if(b===a)b=null;return b;};
A.Bm=C(A.Br);
A.Bv=C(A.Bm);
A.Ee=C(A.Bv);
A.Y=C();
A.Bn=function(){A.Y.call(this);this.j=0;};
A.Gn=null;A.Go=null;A.FQ=function(a){var b=new A.Bn();A.Ec(b,a);return b;};
A.Ec=function(a,b){a.j=b;};
A.Bw=function(b){var c,d;if(b>=(-128)&&b<=127){a:{if(A.Go===null){A.Go=M(A.Bn,256);c=0;while(true){d=A.Go.data;if(c>=d.length)break a;d[c]=A.FQ(c-128|0);c=c+1|0;}}}return A.Go.data[b+128|0];}return A.FQ(b);};
A.Fn=function(a){var b;b=a.j;return (A.DH(A.F4(20),b,10)).z();};
A.Fp=function(a){var b;b=a.j;return b>>>4^b<<28^b<<8^b>>>24;};
A.FK=function(a,b){if(a===b)return 1;return b instanceof A.Bn&&b.j==a.j?1:0;};
A.D3=function(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;};
A.DF=function(a,b){return V(a.j,b.j);};
A.Et=function(){A.Gn=I($rt_intcls());};
A.Ck=function(){var a=this;A.A.call(a);a.a=null;a.c=0;};
A.F4=function(a){var b=new A.Ck();A.Ds(b,a);return b;};
A.Ds=function(a,b){a.a=N(b);};
A.DH=function(a,b,c){return A.Eu(a,a.c,b,c);};
A.Eu=function(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(c<d){if(e)A.P(a,b,b+1|0);else{A.P(a,b,b+2|0);f=a.a.data;g=b+1|0;f[b]=45;b=g;}a.a.data[b]=A.Cg(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=R(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;A.P(a,b,b+i|0);if(e)e=b;else{f=a.a.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.a.data;b=e+1|0;f[e]=A.Cg(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;};
A.Fi=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=V(c,0.0);if(!d){A.P(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}if(!d){A.P(a,b,b+4|0);e=a.a.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if($rt_globals.isNaN(c)?1:0){A.P(a,b,b+3|0);e=a.a.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!$rt_globals.isFinite(c)?1:0){if(d>0){A.P(a,b,b+8|0);d=b;}else{A.P(a,b,b+9|0);e=a.a.data;d=b+1|0;e[b]=45;}e=a.a.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]
=102;d=b+1|0;e[b]=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=A.Gp;A.Ey(c,f);g=f.V;h=f.S;i=f.bX;j=1;k=1;if(i)k=2;l=18;m=A.Fy(g);if(m>0)l=l-m|0;if(h<7&&h>=(-3)){if(h>=0){j=h+1|0;l=A.V(l,j+1|0);h=0;}else{g=L(g,A.Gq.data[ -h|0]);l=l-h|0;h=0;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;A.P(a,b,b+(k+l|0)|0);if(!i)k=b;else{e=a.a.data;k=b+1|0;e[b]=45;}n=G(1569325056, 23283064);o=0;while(o<l){if(W(n,S))d=0;else{d=Bc(L(g,
n));g=X(g,n);}e=a.a.data;b=k+1|0;e[k]=(48+d|0)&65535;j=j+(-1)|0;if(j)k=b;else{k=b+1|0;e[b]=46;}n=L(n,D(10));o=o+1|0;}if(h){e=a.a.data;d=k+1|0;e[k]=69;if(h>=0)j=d;else{h= -h|0;j=d+1|0;e[d]=45;}if(h>=100){b=j+1|0;e[j]=(48+(h/100|0)|0)&65535;h=h%100|0;l=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)l=j;else{l=j+1|0;e[j]=(48+(h/10|0)|0)&65535;}e[l]=(48+(h%10|0)|0)&65535;}return a;};
A.Fy=function(b){var c,d,e,f,g;c=D(1);d=0;e=16;f=A.Gr.data;g=f.length-1|0;while(g>=0){if(T(X(b,F(c,f[g])),S)){d=d|e;c=F(c,f[g]);}e=e>>>1;g=g+(-1)|0;}return d;};
A.CJ=function(a,b){var c,d,e,f,g;c=a.a.data.length;if(c>=b)return;d=c>=1073741823?2147483647:A.V(b,A.V(c*2|0,5));e=a.a.data;f=N(d);g=f.data;b=A.U(d,e.length);c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.a=f;};
A.D=function(a){return A.FJ(a.a,0,a.c);};
A.P=function(a,b,c){var d,e,f,g;d=a.c;e=d-b|0;a.Z((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.a.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.c=a.c+(c-b|0)|0;};
A.Ct=C(0);
A.CZ=C(A.Ck);
A.E=function(){var a=new A.CZ();A.FC(a);return a;};
A.FC=function(a){A.Ds(a,16);};
A.B=function(a,b){A.DZ(a,a.c,b===null?B(8):b.z());return a;};
A.B0=function(a,b){A.DZ(a,a.c,b);return a;};
A.J=function(a,b){A.DH(a,b,10);return a;};
A.D1=function(a,b){A.Fi(a,a.c,b);return a;};
A.I=function(a,b){var c;c=a.c;A.P(a,c,c+1|0);a.a.data[c]=b;return a;};
A.E0=function(a,b){a.c=b;};
A.Fz=function(a){return A.D(a);};
A.FR=function(a,b){A.CJ(a,b);};
A.DZ=function(a,b,c){var d,e,f;if(b>=0&&b<=a.c){a:{if(c===null)c=B(8);else if(A.B8(c))break a;A.CJ(a,a.c+A.K(c)|0);d=a.c-1|0;while(d>=b){a.a.data[d+A.K(c)|0]=a.a.data[d];d=d+(-1)|0;}a.c=a.c+A.K(c)|0;d=0;while(d<A.K(c)){e=a.a.data;f=b+1|0;e[b]=A.Q(c,d);d=d+1|0;b=f;}}return a;}c=new A.B1;A.H(c);E(c);};
A.Bt=C(A.Bv);
A.Fg=C(A.Bt);
A.Gs=function(a){var b=new A.Fg();A.FH(b,a);return b;};
A.FH=function(a,b){A.G(a,b);};
A.EV=C(A.Bt);
A.Gt=function(a){var b=new A.EV();A.FN(b,a);return b;};
A.FN=function(a,b){A.G(a,b);};
A.W=C(A.Br);
A.Gu=function(){var a=new A.W();A.H(a);return a;};
A.Gv=function(a){var b=new A.W();A.BB(b,a);return b;};
A.H=function(a){a.W=1;a.bh=1;};
A.BB=function(a,b){A.G(a,b);};
A.F=C(A.W);
A.Gg=function(a){var b=new A.F();A.Eh(b,a);return b;};
A.Eh=function(a,b){A.G(a,b);};
A.Fd=C();
A.D6=C(0);
A.DY=function(){var a=this;A.A.call(a);a.f=null;a.bY=null;a.s=null;a.bW=0;};
A.Cr=function(a){var b,c,d,e,f,g,h,i,j,k,l;if(A.BX(a.f)){a:{if(!A.DQ(a.f)){b=a.f;if(A.Dx(b.b,b.e,b.o,b.q)){A.O(A.N(),B(12));break a;}c=new A.F;A.G(c,B(13));E(c);}b=A.N();d=((a.s.i+1|0)%2|0)+1|0;c=A.E();A.B(A.J(A.B(c,B(14)),d),B(15));A.O(b,A.D(c));}return;}b=a.bY.data[a.s.i%2|0];if(b===null)return;e=(-Infinity);c=A.Cw();A.C7(A.N(),B(16));f=b.x;g=A.BC(A.Ex(f.b,f.e,A.BW(f),A.Cf(b.x)));while(A.BF(g)){h=(A.BK(g)).j;i=A.Cf(b.x);j=A.BW(b.x);f=b.x;A.BV(f.b,f.e,j,i,h);f=new A.DU;k=b.x;A.Eq(f,k.b,k.e,k.d,i,j);k=b.bv;k.t
=f.b;k.w=f.e;k.L=f.d;k.K=A.FX();l= -A.Dl(k,A.BW(f),A.Cf(f),0,(-Infinity),Infinity);f=A.N();k=A.E();A.B(A.D1(A.B(A.J(A.I(k,123),h),B(17)),l),B(18));A.C7(f,A.D(k));if(l>e){c=A.Cw();e=l;}if(l===e)A.BN(c,A.Bw(h));}j=A.N();k=A.DW(c);b=A.E();A.D1(A.B(A.B(A.B(b,B(19)),k),B(20)),e);A.O(j,A.D(b));A.C$(a,(A.DM(c,0)).j);A.Cr(a);};
A.C$=function(a,b){var c;c=a.f;A.BV(c.b,c.e,c.o,c.q,b);A.BN(a.s,A.Bw(b));A.DE(a);};
A.DE=function(a){var b,c,d;A.EP();if(!a.bW)return;A.O(A.N(),A.Dn(a));b=A.N();c=A.DW(a.s);d=A.E();A.B(A.B(d,B(21)),c);A.O(b,A.D(d));};
A.Dn=function(a){var b,c,d,e,f;b=A.E();A.B(A.B(b,B(22)),B(23));c=A.D(b);d=0;while(d<(a.f.b-1|0)){b=A.E();A.B(A.B(b,c),B(24));c=A.D(b);d=d+1|0;}b=A.E();A.B(A.B(b,c),B(25));b=A.D(b);e=a.f.e-1|0;while(e>=0){c=A.E();A.I(A.B(c,b),9474);b=A.D(c);d=0;while(d<a.f.b){c=A.E();A.I(A.B(c,b),32);b=A.D(c);if(!A.Bp(a.f,e,d)){c=A.E();A.I(A.B(c,b),32);b=A.D(c);}else if(A.Bs(a.f,e,d)!=(a.s.i%2|0?0:1)){c=A.E();A.I(A.B(c,b),79);b=A.D(c);}else{c=A.E();A.I(A.B(c,b),88);b=A.D(c);}c=A.E();A.B(A.B(c,b),B(26));b=A.D(c);d=d+1|0;}c=A.E();A.I(A.B(c,
b),10);b=A.D(c);e=e+(-1)|0;}f=0;while(f<a.f.b){c=A.E();A.I(A.J(A.B(A.B(c,b),B(27)),f),32);b=A.D(c);f=f+1|0;}c=A.E();A.B(A.B(c,b),B(28));b=A.D(c);c=A.E();A.B(A.B(c,b),B(29));c=A.D(c);f=0;while(f<(a.f.b-1|0)){b=A.E();A.B(A.B(b,c),B(30));c=A.D(b);f=f+1|0;}b=A.E();A.I(A.B(b,c),9496);return A.D(b);};
A.B3=C(0);
A.Ej=C();
A.BU=C(0);
A.C6=function(){var a=this;A.A.call(a);a.K=null;a.t=0;a.w=0;a.L=0;a.bT=0;a.bf=null;};
A.Dl=function(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;if(A.Dj(a.K,Ba(A.Bi,[b,c]))===null?0:1)return (A.Cp(a.K,Ba(A.Bi,[b,c]))).O;if(A.Dw(a.t,a.w,b,c,a.L))return (-Infinity);if(A.Dx(a.t,a.w,b,c))return 0.0;if(d>=a.bT)return  -A.CY(a.bf,A.Es(a.t,a.w,a.L,c,b));g=A.Ex(a.t,a.w,b,c);h=A.FX();i=A.BC(g);while(A.BF(i)){j=(A.BK(i)).j;k=A.Bw(j);l=a.bf;m=a.t;n=a.w;o=a.L;p=A.Bf(b);q=A.Bf(c);A.BV(m,n,p,q,j);A.Dp(h,k,A.Db(A.CY(l,A.Es(m,n,o,p,q))));}p=new A.CV;p.bm=h;n=g.i;r=M(A.A,n);s=r.data;o
=s.length;if(o<n)k=A.EH(A.CU(A.CI(r)),n);else{while(n<o){s[n]=null;n=n+1|0;}k=r;}m=0;l=A.BC(g);while(A.BF(l)){t=k.data;n=m+1|0;t[m]=A.BK(l);m=n;}if(o){u=M(A.A,o);v=1;w=r;while(v<o){x=0;while(true){y=w.data;m=y.length;if(x>=m)break;n=A.U(m,x+v|0);j=x+(2*v|0)|0;z=A.U(m,j);ba=x;bb=n;a:{b:{while(x!=n){if(bb==z)break b;k=y[x];l=y[bb];if(p.bB(k,l)>0){bc=u.data;m=ba+1|0;bc[ba]=l;bb=bb+1|0;}else{bc=u.data;m=ba+1|0;bc[ba]=k;x=x+1|0;}ba=m;}while(true){if(bb>=z)break a;bc=u.data;m=ba+1|0;n=bb+1|0;bc[ba]=y[bb];ba=m;bb=
n;}}while(true){if(x>=n)break a;bc=u.data;z=ba+1|0;m=x+1|0;bc[ba]=y[x];ba=z;x=m;}}x=j;}v=v*2|0;bc=w;w=u;u=bc;}c:{if(w!==r){m=0;while(true){r=w.data;if(m>=r.length)break c;u.data[m]=r[m];m=m+1|0;}}}}m=0;while(m<o){k=s[m];A.C1(g,m);g.m.data[m]=k;m=m+1|0;}bd=(-Infinity);if(g.i?0:1){b=new A.M;A.G(b,B(31));E(b);}k=A.BC(g);m=d+1|0;be= -f;d:{while(A.BF(k)){n=(A.BK(k)).j;l=A.Bf(b);p=A.Bf(c);A.BV(a.t,a.w,l,p,n);bd=A.EF(bd, -A.Dl(a,l,p,m,be, -e));e=A.EF(e,bd);if(e>=f)break d;}}A.Dp(a.K,Ba(A.Bi,[b,c]),A.Db(bd));return bd;};
A.DB=C();
A.CY=function(a,b){var c,d,e,f,g,h,i,j;c=0.0;d=0;while(d<b.b){e=0;while(true){f=b.e+1|0;g=b.d;if(e>=(f-g|0))break;h=Q(g);i=h.data;g=0;while(true){f=b.d;if(g>=f)break;f=e+g|0;if(!A.Bp(b,f,d))i[g]=0;else if(!A.Bs(b,f,d))i[g]=(-1);else i[g]=1;g=g+1|0;}c=c+A.B2(h,f);e=e+1|0;}d=d+1|0;}f=0;while(f<((b.b+1|0)-b.d|0)){j=0;while(j<b.e){h=Q(b.d);i=h.data;g=0;while(true){d=b.d;if(g>=d)break;d=f+g|0;if(!A.Bp(b,j,d))i[g]=0;else if(!A.Bs(b,j,d))i[g]=(-1);else i[g]=1;g=g+1|0;}c=c+A.B2(h,d);j=j+1|0;}f=f+1|0;}d=0;while(d<((b.b
+1|0)-b.d|0)){e=0;while(true){f=b.e+1|0;g=b.d;if(e>=(f-g|0))break;h=Q(g);i=h.data;g=0;while(true){f=b.d;if(g>=f)break;f=e+g|0;j=d+g|0;if(!A.Bp(b,f,j))i[g]=0;else if(!A.Bs(b,f,j))i[g]=(-1);else i[g]=1;g=g+1|0;}c=c+A.B2(h,f);h=Q(b.d);i=h.data;g=0;while(true){f=b.d;if(g>=f)break;j=e+g|0;if(!A.Bp(b,j,((d+f|0)-g|0)-1|0))i[g]=0;else if(!A.Bs(b,j,((d+b.d|0)-g|0)-1|0))i[g]=(-1);else i[g]=1;g=g+1|0;}c=c+A.B2(h,f);e=e+1|0;}d=d+1|0;}return c;};
A.B2=function(b,c){var d,e,f,g,h,i;b=b.data;d=1;e=1;f=0;g=b.length;h=0;while(h<g){i=(A.Bw(b[h])).j;if(i==(-1))d=0;if(i==1)e=0;f=f+i|0;h=h+1|0;}if(!d&&!e)return 0.0;if(f==c)return Infinity;if(f==( -c|0))return (-Infinity);return R(R(f,f),f);};
A.Co=C(0);
A.Cz=function(){var a=this;A.A.call(a);a.x=null;a.bv=null;};
A.Bb=C(0);
A.CF=C(0);
A.CK=C(0);
A.T=C(0);
A.EM=C(0);
A.CS=C();
A.Gw=null;A.N=function(){var b;if(A.Gw===null){b=new A.DD;b.b3=A.Gx;b.B=A.E();b.b4=N(32);b.ce=0;b.bV=A.Gy;A.Gw=b;}return A.Gw;};
A.C_=C(0);
A.CT=function(){var a=this;A.A.call(a);a.bx=null;a.bw=null;};
A.Ft=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;b=a.bx;c=a.bw;A.O(A.N(),B(32));d=A.Gi;b=$rt_str(b.value);if(b!==null&&!A.B8(b)){a:{e=0;f=0;switch(A.Q(b,0)){case 43:f=1;break a;case 45:e=1;f=1;break a;default:}}g=0;if(f==A.K(b)){b=new A.Bd;A.H(b);E(b);}b:{while(true){if(f>=A.K(b)){if(e)g= -g|0;break b;}h=f+1|0;f=A.Q(b,f);if(A.Gz===null)A.Gz=A.FF(((A.En()).value!==null?$rt_str((A.En()).value):null));i=A.Gz.data;j=0;k=(i.length/2|0)-1|0;c:{while(k>=j){l=(j+k|0)/2|0;m=l*2|0;n=V(f,i[m]);if(n>0)j=l+1|0;else{if(n
>=0){m=i[m+1|0];break c;}k=l-1|0;}}m=(-1);}if(m<0)break;if(m>=10){c=new A.Bd;d=A.E();A.B(A.B(A.J(A.B(d,B(33)),10),B(17)),b);A.BB(c,A.D(d));E(c);}g=(10*g|0)+m|0;if(g<0){if(h==A.K(b)&&g==(-2147483648)&&e){g=(-2147483648);break b;}c=new A.Bd;d=A.E();A.B(A.B(d,B(34)),b);A.BB(c,A.D(d));E(c);}f=h;}c=new A.Bd;d=A.E();A.B(A.B(d,B(35)),b);A.BB(c,A.D(d));E(c);}if(A.BX(d.f)){c=new A.F;A.G(c,B(36));E(c);}A.C$(d,g);A.Cr(d);if(A.BX(A.Gi.f)){if(!A.DQ(A.Gi.f)){c.getElementById("tie-screen").style.setProperty("display","block");A.O(A.N(),
B(37));}else{o=((A.Gi.s.i+1|0)%2|0)+1|0;b=A.E();A.B(A.J(A.I(b,112),o),B(38));d=A.D(b);c.getElementById($rt_ustr(d)).style.setProperty("display","block");A.O(A.N(),B(39));}}return;}b=new A.Bd;A.BB(b,B(40));E(b);};
A.C2=C(0);
A.Bo=C(0);
A.CG=C();
A.Be=C();
A.GA=null;A.Gz=null;A.GB=null;A.GC=null;A.DT=function(b){return (b&64512)!=55296?0:1;};
A.DA=function(b){return (b&64512)!=56320?0:1;};
A.Cg=function(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;};
A.En=function(){if(A.GC===null)A.GC=A.Eg();return A.GC;};
A.EU=function(){A.GA=I($rt_charcls());A.GB=M(A.Be,128);};
A.Eg=function(){return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};};
A.Ev=function(){A.A.call(this);this.dq=null;};
A.DX=C(0);
A.CP=C(0);
A.DN=C(0);
A.CX=C(0);
A.Di=C(0);
A.Da=C(0);
A.Dr=C(0);
A.EY=C();
A.Fl=function(a,b,c){a.dv($rt_str(b),A.Cs(c,"handleEvent"));};
A.Fu=function(a,b,c){a.c9($rt_str(b),A.Cs(c,"handleEvent"));};
A.FW=function(a,b){return a.dn(b);};
A.FZ=function(a,b,c,d){a.dI($rt_str(b),A.Cs(c,"handleEvent"),d?1:0);};
A.Fk=function(a,b){return !!a.dD(b);};
A.FI=function(a){return a.c8();};
A.Fv=function(a,b,c,d){a.dJ($rt_str(b),A.Cs(c,"handleEvent"),d?1:0);};
A.Dv=C(0);
A.Dt=C(0);
A.De=C(0);
A.Bl=C();
A.Ch=function(){A.Bl.call(this);this.b3=null;};
A.DD=function(){var a=this;A.Ch.call(a);a.ce=0;a.Y=0;a.B=null;a.b4=null;a.bV=null;};
A.DI=function(a,b,c,d){var e,$$je;e=a.b3;if(e===null)a.Y=1;if(!(a.Y?0:1))return;a:{try{A.EL(e,b,c,d);break a;}catch($$e){$$je=Be($$e);if($$je instanceof A.C3){}else{throw $$e;}}a.Y=1;}};
A.C7=function(a,b){A.B0(a.B,b);A.DP(a);};
A.O=function(a,b){A.I(A.B0(a.B,b),10);A.DP(a);};
A.DP=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$$je;b=a.B;c=b.c;d=a.b4;if(c>d.data.length)d=N(c);e=0;f=0;if(e>c){b=new A.L;A.G(b,B(41));E(b);}while(e<c){g=d.data;h=f+1|0;i=b.a.data;j=e+1|0;g[f]=i[e];f=h;e=j;}g=d.data;e=c-0|0;k=new A.CQ;c=g.length;e=0+e|0;A.C9(k,c);k.g=0;k.p=e;k.bP=0;k.cj=0;k.b0=d;d=Y(A.V(16,A.U(c,1024)));e=d.data.length;l=new A.D$;h=0+e|0;A.C9(l,e);l.cx=A.GD;l.bG=0;l.br=d;l.g=0;l.p=h;l.cd=0;l.bQ=0;m=a.bV;n=new A.D7;i=Y(1);g=i.data;g[0]=63;b=A.GE;n.bb=b;n.be=b;f=g.length;if(f&&f>=n.bo){n.ct
=m;n.bq=i.bi();n.b7=2.0;n.bo=4.0;n.bO=N(512);n.bz=Y(512);b=A.GF;if(b===null){l=new A.M;A.G(l,B(42));E(l);}n.bb=b;n.be=b;while(n.Q!=3){n.Q=2;a:{while(true){try{o=A.Eb(n,k,l);}catch($$e){$$je=Be($$e);if($$je instanceof A.F){b=$$je;l=new A.Cx;A.E3(l,b);E(l);}else{throw $$e;}}if(o.D?0:1){e=A.Z(k);if(e<=0)break a;o=A.Cu(e);}else if(A.Cn(o))break;b=!A.D8(o)?n.bb:n.be;b:{if(b!==A.GF){if(b===A.GG)break b;else break a;}e=A.Z(l);g=n.bq;j=g.data.length;if(e<j){o=A.GH;break a;}A.Ea(l,g,0,j);}j=k.g;if(!(!A.E$(o)&&!A.D8(o)
?0:1)){b=new A.BI;A.H(b);E(b);}A.CA(k,j+o.bF|0);}}e=A.Cn(o);A.DI(a,d,0,l.g);A.CN(l);if(!e){while(true){e=n.Q;if(e!=2&&e!=4){b=new A.B_;A.H(b);E(b);}b=A.GI;if(b===b)n.Q=3;e=A.Cn(b);A.DI(a,d,0,l.g);A.CN(l);if(!e)break;}A.E0(a.B,0);return;}}b=new A.B_;A.H(b);E(b);}l=new A.M;A.Eh(l,B(43));E(l);};
A.BO=function(){A.Bl.call(this);this.ci=null;};
A.BR=C(A.BO);
A.Gx=null;A.EL=function(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}};
A.EK=function(){var b;b=new A.BR;b.ci=Y(1);A.Gx=b;};
A.Dh=C(0);
A.Bz=C(0);
A.Bj=C();
A.C4=C(0);
A.Bk=function(){A.Bj.call(this);this.I=0;};
A.BC=function(a){var b;b=new A.DR;b.bA=a;b.b5=a.I;b.bp=a.i;b.bM=(-1);return b;};
A.Bg=C(0);
A.BS=C(0);
A.Ed=function(){var a=this;A.Bk.call(a);a.m=null;a.i=0;};
A.Cw=function(){var a=new A.Ed();A.FM(a);return a;};
A.FM=function(a){a.m=M(A.A,10);};
A.DM=function(a,b){A.C1(a,b);return a.m.data[b];};
A.BN=function(a,b){var c,d,e,f,g,h;c=a.i+1|0;d=a.m.data.length;if(d<c){c=d>=1073741823?2147483647:A.V(c,A.V(d*2|0,5));e=a.m;f=e.data;g=A.EH(A.CU(A.CI(e)),c);h=A.U(c,f.length);d=0;while(d<h){g.data[d]=f[d];d=d+1|0;}a.m=g;}e=a.m.data;h=a.i;a.i=h+1|0;e[h]=b;a.I=a.I+1|0;return 1;};
A.C1=function(a,b){var c;if(b>=0&&b<a.i)return;c=new A.L;A.H(c);E(c);};
A.Ca=function(){var a=this;A.A.call(a);a.cb=null;a.cn=null;};
A.E8=function(b){var c,d;if(A.B8(b))E(A.EQ(b));if(!A.E9(A.Q(b,0)))E(A.EQ(b));c=1;while(c<A.K(b)){a:{d=A.Q(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(A.E9(d))break a;else E(A.EQ(b));}}c=c+1|0;}};
A.E9=function(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
A.Ci=C(A.Ca);
A.Gy=null;A.Er=function(){var b,c,d,e,f;b=new A.Ci;c=M(A.BJ,0);d=c.data;A.E8(B(44));e=d.length;f=0;while(f<e){A.E8(d[f]);f=f+1|0;}b.cb=B(44);b.cn=c.bi();A.Gy=b;};
A.DU=function(){var a=this;A.A.call(a);a.d=0;a.b=0;a.e=0;a.q=null;a.o=null;};
A.Es=function(a,b,c,d,e){var f=new A.DU();A.Eq(f,a,b,c,d,e);return f;};
A.Eq=function(a,b,c,d,e,f){a.b=b;a.e=c;a.d=d;a.q=e;a.o=f;};
A.BX=function(a){var b,c,d,e,f;b=a.b;c=a.e;d=a.o;e=a.q;f=a.d;return !A.Dx(b,c,d,e)&&!A.Dw(b,c,d,e,f)?0:1;};
A.DQ=function(a){return A.Dw(a.b,a.e,a.o,a.q,a.d);};
A.Cf=function(a){return A.Bf(a.q);};
A.BW=function(a){return A.Bf(a.o);};
A.Bp=function(a,b,c){return A.Cd(a.b,a.e,a.o,a.q,b,c);};
A.Bs=function(a,b,c){return A.BH(a.b,a.e,a.o,a.q,b,c);};
A.Bi=function(){var a=this;A.A.call(a);a.h=null;a.k=0;};
A.FP=function(a){var b=new A.Bi();A.FE(b,a);return b;};
A.FE=function(a,b){a.h=Q(((b+32|0)-1|0)/32|0);};
A.Do=function(a,b){var c,d;c=b/32|0;d=a.h.data;return c<d.length&&d[c]&1<<(b%32|0)?1:0;};
A.C0=function(a,b){var c;c=a.h.data.length;if(c>=b)return;c=A.V((b*3|0)/2|0,(c*2|0)+1|0);a.h=A.EN(a.h,c);};
A.D0=function(a){var b,c,d;b=(a.k+31|0)/32|0;a.k=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=A.D3(a.h.data[c]);if(d<32)break;c=c+(-1)|0;a.k=a.k-32|0;}a.k=a.k-d|0;}};
A.Bf=function(a){var b,c,d;b=new A.Bi;c=a.h;c=A.EN(c,c.data.length);d=c.data;b.h=c;b.k=d.length*32|0;A.D0(b);return b;};
A.M=C(A.F);
A.Fc=function(){A.M.call(this);this.b8=null;};
A.EQ=function(a){var b=new A.Fc();A.FL(b,a);return b;};
A.FL=function(a,b){A.H(a);a.b8=b;};
A.CL=C(A.W);
A.L=C(A.F);
A.B1=C(A.L);
A.Bu=function(){var a=this;A.A.call(a);a.by=0;a.g=0;a.p=0;a.P=0;};
A.C9=function(a,b){a.P=(-1);a.by=b;a.p=b;};
A.Z=function(a){return a.p-a.g|0;};
A.Bh=function(a){return a.g>=a.p?0:1;};
A.D5=C(0);
A.B6=C(A.Bu);
A.CA=function(a,b){var c,d,e;if(b>=0&&b<=a.p){a.g=b;if(b<a.P)a.P=0;return a;}c=new A.M;d=a.p;e=A.E();A.I(A.J(A.B(A.J(A.B(e,B(45)),b),B(46)),d),93);A.G(c,A.D(e));E(c);};
A.Ek=C();
A.U=function(b,c){if(b<c)c=b;return c;};
A.V=function(b,c){if(b>c)c=b;return c;};
A.EF=function(b,c){if(b>c)c=b;return c;};
A.Cc=function(){var a=this;A.Bu.call(a);a.bG=0;a.br=null;a.cx=null;};
A.Ea=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.bQ){e=new A.DG;A.H(e);E(e);}if(A.Z(a)<d){e=new A.D9;A.H(e);E(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){i=new A.L;j=A.E();A.J(A.B(A.J(A.B(j,B(47)),h),B(48)),g);A.G(i,A.D(j));E(i);}if(d<0){e=new A.L;i=A.E();A.B(A.J(A.B(i,B(49)),d),B(50));A.G(e,A.D(i));E(e);}h=a.g;k=h+a.bG|0;l=0;while(l<d){b=a.br.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.g=h+d|0;return a;}}b=b.data;e=new A.L;d=b.length;i=A.E();A.I(A.J(A.B(A.J(A.B(i,B(51)),c),
B(46)),d),41);A.G(e,A.D(i));E(e);};
A.CN=function(a){a.g=0;a.p=a.by;a.P=(-1);return a;};
A.By=function(){A.A.call(this);this.cl=null;};
A.GG=null;A.GF=null;A.GE=null;A.Ei=function(a){var b=new A.By();A.E1(b,a);return b;};
A.E1=function(a,b){a.cl=b;};
A.Ep=function(){A.GG=A.Ei(B(52));A.GF=A.Ei(B(53));A.GE=A.Ei(B(54));};
A.Ez=C();
A.Dw=function(b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=0;h=(c+1|0)-f|0;a:while(true){if(g>=b){g=0;i=(b+1|0)-f|0;b:while(true){if(g>=i){j=0;while(j<i){k=0;while(k<h){l=1;m=0;c:{while(m<f){if(!A.BH(b,c,d,e,k+m|0,j+m|0)){l=0;break c;}m=m+1|0;}}if(l)return 1;l=1;m=0;d:{while(m<f){if(!A.BH(b,c,d,e,k+m|0,((j+f|0)-m|0)-1|0)){l=0;break d;}m=m+1|0;}}if(l)return 1;k=k+1|0;}j=j+1|0;}return 0;}n=0;while(n<c){l=1;m=0;e:{while(m<f){if(!A.BH(b,c,d,e,n,g+m|0)){l=0;break e;}m=m+1|0;}}if(l)break b;n=n+1|0;}g=g+1|0;}return 1;}n=0;while
(n<h){o=1;m=0;f:{while(m<f){if(!A.BH(b,c,d,e,n+m|0,g)){o=0;break f;}m=m+1|0;}}if(o)break a;n=n+1|0;}g=g+1|0;}return 1;};
A.Dx=function(b,c,d,e){var f,g;f=0;g=c-1|0;while(f<b){if(!A.Cd(b,c,d,e,g,f))return 0;f=f+1|0;}return 1;};
A.Ff=function(b,c,d,e,f){if(f>=0&&f<b)return A.Cd(b,c,d,e,c-1|0,f)?0:1;return 0;};
A.BV=function(b,c,d,e,f){var g,h;if(!A.Ff(b,c,d,e,f)){d=new A.F;A.G(d,B(55));E(d);}g=0;while(g<c){if(!A.Cd(b,c,d,e,g,f)){b=R(c,f)+g|0;c=b/32|0;if(b>=d.k){A.C0(d,c+1|0);d.k=b+1|0;}h=d.h.data;h[c]=h[c]|1<<(b%32|0);b=A.V(e.k,d.k);e.k=b;A.C0(e,(b+31|0)/32|0);b=A.U(e.h.data.length,d.h.data.length);c=0;while(c<b){h=e.h.data;h[c]=h[c]^d.h.data[c];c=c+1|0;}A.D0(e);return;}g=g+1|0;}d=new A.F;A.G(d,B(56));E(d);};
A.Cd=function(b,c,d,e,f,g){return A.Do(d,R(c,g)+f|0);};
A.BH=function(b,c,d,e,f,g){if(0<=f&&f<c&&0<=g&&g<b)return A.Do(e,R(c,g)+f|0);e=new A.M;A.G(e,B(57));E(e);};
A.Ex=function(b,c,d,e){var f,g;f=A.Cw();g=0;while(g<b){if(A.Ff(b,c,d,e,g))A.BN(f,A.Bw(g));g=g+1|0;}return f;};
A.BQ=C(A.B6);
A.CQ=function(){var a=this;A.BQ.call(a);a.cj=0;a.bP=0;a.b0=null;};
A.BM=function(){var a=this;A.A.call(a);a.ct=null;a.bq=null;a.b7=0.0;a.bo=0.0;a.bb=null;a.be=null;a.Q=0;};
A.BZ=function(){var a=this;A.A.call(a);a.D=0;a.bF=0;};
A.GI=null;A.GH=null;A.Eo=function(a,b){var c=new A.BZ();A.E7(c,a,b);return c;};
A.E7=function(a,b,c){a.D=b;a.bF=c;};
A.Cn=function(a){return a.D!=1?0:1;};
A.E$=function(a){return a.D!=2?0:1;};
A.D8=function(a){return a.D!=3?0:1;};
A.Cu=function(b){return A.Eo(2,b);};
A.Em=function(){A.GI=A.Eo(0,0);A.GH=A.Eo(1,0);};
A.D$=function(){var a=this;A.Cc.call(a);a.cd=0;a.bQ=0;};
A.Bd=C(A.M);
A.BP=function(){A.A.call(this);this.b_=null;};
A.GD=null;A.GJ=null;A.Fo=function(a){var b=new A.BP();A.Ef(b,a);return b;};
A.Ef=function(a,b){a.b_=b;};
A.E4=function(){A.GD=A.Fo(B(58));A.GJ=A.Fo(B(59));};
A.Fb=C();
A.EB=C();
A.FF=function(b){var c,d,e,f,g,h,i,j,k,l;c=new A.DS;d=b.n.data;e=N(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}c.bL=e;g=A.EA(c);d=Q(g*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<g){i=i+A.EJ(c)|0;j=j+A.EJ(c)|0;l=h+1|0;e[h]=i;h=l+1|0;e[l]=j;k=k+1|0;}return d;};
A.DS=function(){var a=this;A.A.call(a);a.bL=null;a.bN=0;};
A.Fe=C();
A.EA=function(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.bL.data;f=b.bN;b.bN=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+R(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
A.EJ=function(b){var c,d;c=A.EA(b);d=c/2|0;if(c%2|0)d= -d|0;return d;};
A.Cq=function(){var a=this;A.BM.call(a);a.bO=null;a.bz=null;};
A.Eb=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.bO;e=0;f=0;g=a.bz;a:{b:{while(true){if((e+32|0)>f&&A.Bh(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=A.Z(b)+j|0;h=i.length;f=A.U(k,h);e=f-j|0;if(j<0)break b;if(j>=h)break b;k=j+e|0;if(k>h){l=new A.L;b=A.E();A.J(A.B(A.J(A.B(b,B(60)),k),B(48)),h);A.G(l,A.D(b));E(l);}if(A.Z(b)<e)break;if(e<0){b=new A.L;c=A.E();A.B(A.J(A.B(c,B(49)),e),B(50));A.G(b,A.D(c));E(b);}h=b.g;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.b0.data[n+b.bP|0];m=m+1|
0;j=o;n=k;}b.g=h+e|0;e=0;}if(!A.Bh(c)){l=!A.Bh(b)&&e>=f?A.GI:A.GH;break a;}i=g.data;k=A.U(A.Z(c),i.length);p=new A.D2;p.bJ=b;p.bu=c;l=A.EZ(a,d,e,f,g,0,k,p);e=p.bH;j=p.bD;if(l===null){if(!A.Bh(b)&&e>=f)l=A.GI;else if(!A.Bh(c)&&e>=f)l=A.GH;}A.Ea(c,g,0,j);if(l!==null)break a;}b=new A.Dq;A.H(b);E(b);}p=new A.L;l=A.E();A.I(A.J(A.B(A.J(A.B(l,B(51)),j),B(46)),h),41);A.G(p,A.D(l));E(p);}A.CA(b,b.g-(f-e|0)|0);return l;};
A.D7=C(A.Cq);
A.EZ=function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(A.BT(h,2))break a;i=A.GH;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!A.DT(l)&&!A.DA(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(A.BT(h,3))break a;i=A.GH;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24
>>24;}else{if(!A.DT(l)){i=A.Cu(1);break a;}if(j>=d){if(A.Bh(h.bJ))break a;i=A.GI;break a;}c=j+1|0;n=k[j];if(!A.DA(n)){j=c+(-2)|0;i=A.Cu(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(A.BT(h,4))break a;i=A.GH;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.bH=j;h.bD=f;return i;};
A.C3=C(A.W);
A.Fj=C();
A.EN=function(b,c){var d,e,f,g;b=b.data;d=Q(c);e=d.data;f=A.U(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;};
A.BL=C(0);
A.DR=function(){var a=this;A.A.call(a);a.bn=0;a.b5=0;a.bp=0;a.bM=0;a.bA=null;};
A.BF=function(a){return a.bn>=a.bp?0:1;};
A.BK=function(a){var b,c,d;b=a.b5;c=a.bA;if(b<c.I){c=new A.Dz;A.H(c);E(c);}d=a.bn;a.bM=d;a.bn=d+1|0;return A.DM(c,d);};
A.C5=C(0);
A.Bq=C();
A.EI=function(){var a=this;A.Bq.call(a);a.E=0;a.l=null;a.M=0;a.bZ=0.0;a.X=0;};
A.FX=function(){var a=new A.EI();A.Fm(a);return a;};
A.Fm=function(a){var b;b=A.El(16);a.E=0;a.l=M(A.BD,b);a.bZ=0.75;A.Dm(a);};
A.El=function(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;};
A.Dm=function(a){a.X=a.l.data.length*a.bZ|0;};
A.Cp=function(a,b){var c;c=A.Dj(a,b);if(c===null)return null;return c.N;};
A.Dj=function(a,b){var c,d;if(b===null)c=A.DV(a);else{d=b.H();c=A.Dk(a,b,d&(a.l.data.length-1|0),d);}return c;};
A.Dk=function(a,b,c,d){var e,f;e=a.l.data[c];while(e!==null){if(e.bd==d){f=e.bj;if(b!==f&&!b.bl(f)?0:1)break;}e=e.F;}return e;};
A.DV=function(a){var b;b=a.l.data[0];while(b!==null&&b.bj!==null){b=b.F;}return b;};
A.Dp=function(a,b,c){var d,e,f;if(b===null){d=A.DV(a);if(d===null){a.M=a.M+1|0;d=A.Dd(a,null,0,0);e=a.E+1|0;a.E=e;if(e>a.X)A.DC(a);}}else{e=b.H();f=e&(a.l.data.length-1|0);d=A.Dk(a,b,f,e);if(d===null){a.M=a.M+1|0;d=A.Dd(a,b,f,e);e=a.E+1|0;a.E=e;if(e>a.X)A.DC(a);}}b=d.N;d.N=c;return b;};
A.Dd=function(a,b,c,d){var e,f,g;e=new A.BD;f=null;e.bj=b;e.N=f;e.bd=d;g=a.l.data;e.F=g[c];g[c]=e;return e;};
A.DC=function(a){var b,c,d,e,f,g,h,i;b=a.l.data.length;b=A.El(!b?1:b<<1);c=M(A.BD,b);d=c.data;e=0;f=b-1|0;while(true){g=a.l.data;if(e>=g.length)break;h=g[e];g[e]=null;while(h!==null){b=h.bd&f;i=h.F;h.F=d[b];d[b]=h;h=i;}e=e+1|0;}a.l=c;A.Dm(a);};
A.EG=C();
A.Bx=function(){A.Y.call(this);this.O=0.0;};
A.GK=0.0;A.GL=null;A.Db=function(b){var c;c=new A.Bx;c.O=b;return c;};
A.ES=function(){A.GK=$rt_globals.NaN;A.GL=I($rt_doublecls());};
A.CV=function(){A.A.call(this);this.bm=null;};
A.FO=function(a,b,c){b=A.Cp(a.bm,b);c=A.Cp(a.bm,c);return V(b.O,c.O);};
A.ER=C();
A.EH=function(b,c){if(b===null){b=new A.CW;A.H(b);E(b);}if(b===I($rt_voidcls())){b=new A.M;A.H(b);E(b);}if(c>=0)return A.Fq(b.ba,c);b=new A.D_;A.H(b);E(b);};
A.Fq=function(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}};
A.CW=C(A.F);
A.D_=C(A.F);
A.CH=C(0);
A.B$=function(){var a=this;A.A.call(a);a.bj=null;a.N=null;};
A.BD=function(){var a=this;A.B$.call(a);a.bd=0;a.F=null;};
A.S=C();
A.GM=null;A.GN=null;A.GO=null;A.GP=null;A.GQ=null;A.GR=null;A.GS=null;A.EE=function(){A.GM=new A.CE;A.GN=new A.CC;A.GO=new A.CD;A.GP=new A.Cy;A.GQ=new A.CB;A.GR=new A.DK;A.GS=new A.DJ;};
A.Dz=C(A.F);
A.Bc=C();
A.GT=null;A.Gq=null;A.Gr=null;A.Gp=null;A.GU=null;A.ED=function(){A.GT=Bh([1,10,100,1000,10000,100000,1000000,10000000,100000000,1000000000]);A.Gq=Bd([D(1),D(10),D(100),D(1000),D(10000),D(100000),D(1000000),D(10000000),D(100000000),D(1000000000),G(1410065408, 2),G(1215752192, 23),G(3567587328, 232),G(1316134912, 2328),G(276447232, 23283),G(2764472320, 232830),G(1874919424, 2328306),G(1569325056, 23283064),G(2808348672, 232830643)]);A.Gr=Bd([D(1),D(10),D(100),D(10000),D(100000000),G(1874919424, 2328306)]);A.Gp
=new A.CO;A.GU=new A.Cv;};
A.B9=C();
A.GV=null;A.GW=null;A.Ey=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=$rt_doubleToLongBits(b);c.bX=T(J(d,G(0, 2147483648)),S)?0:1;e=J(d,G(4294967295, 1048575));f=Bc(U(d,52))&2047;if(T(e,S)&&!f){c.V=S;c.S=0;return;}g=0;if(f)e=Bi(e,G(0, 1048576));else{e=P(e,1);while(T(J(e,G(0, 1048576)),S)){e=P(e,1);f=f+(-1)|0;g=g+1|0;}}h=A.GW.data;i=0;j=h.length;k=V(i,j);if(k>0){c=new A.M;A.H(c);E(c);}a:{if(!k)l=(-1);else{j=j-1|0;while(true){l=(i+j|0)/2|0;k=h[l];if(k==f)break;if(f>=k){i=l+1|0;if(i>j){l=( -l|0)-2|0;break a;}}
else{j=l-1|0;if(j<i){l=( -l|0)-1|0;break a;}}}}}if(l<0)l=( -l|0)-2|0;i=12+(f-h[l]|0)|0;m=A.C8(e,A.GV.data[l],i);if(Z(m,G(2808348672, 232830643))){l=l+1|0;i=12+(f-A.GW.data[l]|0)|0;m=A.C8(e,A.GV.data[l],i);}n=O(A.GV.data[l],(63-i|0)-g|0);o=U(H(n,D(1)),1);p=U(n,1);if(T(e,G(0, 1048576)))p=U(p,2);q=D(10);while(W(q,p)){q=F(q,D(10));}if(Z(X(m,q),L(p,D(2))))q=L(q,D(10));r=D(1);while(W(r,o)){r=F(r,D(10));}if(Bb(Bg(r,X(m,r)),L(o,D(2))))r=L(r,D(10));f=Bk(q,r);e=f>0?F(L(m,q),q):f<0?H(F(L(m,r),r),r):F(L(H(m,L(r,D(2))),
r),r);if(Z(e,G(2808348672, 232830643))){l=l+1|0;e=L(e,D(10));}else if(Bf(e,G(1569325056, 23283064))){l=l+(-1)|0;e=F(e,D(10));}c.V=e;c.S=l-330|0;};
A.C8=function(b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=J(b,D(65535));f=J(O(b,16),D(65535));g=J(O(b,32),D(65535));h=J(O(b,48),D(65535));i=J(c,D(65535));j=J(O(c,16),D(65535));k=J(O(c,32),D(65535));l=J(O(c,48),D(65535));m=H(H(F(k,e),F(j,f)),F(i,g));n=H(H(H(F(l,e),F(k,f)),F(j,g)),F(i,h));o=H(H(P(F(l,h),32+d|0),P(H(F(l,g),F(k,h)),16+d|0)),P(H(H(F(l,f),F(k,g)),F(j,h)),d));return H(d>16?H(o,P(n,d-16|0)):H(o,O(n,16-d|0)),O(m,32-d|0));};
A.Fa=function(){var b,c,d,e,f,g,h,i,j,k;A.GV=Bl(660);A.GW=Q(660);b=G(991952896, 1862645149);c=1023;d=0;e=b;while(d<330){f=A.GV.data;g=d+330|0;f[g]=A.B5(e,D(80));A.GW.data[g]=c;e=A.B5(e,D(10));h=A.EW(e,D(10));while(W(e,b)&&T(J(e,G(0, 2147483648)),S)){e=P(e,1);c=c+1|0;h=P(h,1);}e=H(e,L(h,D(10)));d=d+1|0;}d=1023;i=0;while(i<330){j=0;e=b;while(Bb(e,G(3435973836, 214748364))){e=U(e,1);j=j+1|0;d=d+(-1)|0;}k=F(e,D(10));b=j<=0?k:H(k,U(F(J(b,D((1<<j)-1|0)),D(10)),j));f=A.GV.data;g=(330-i|0)-1|0;f[g]=A.B5(b,D(80));A.GW.data[g]
=d;i=i+1|0;}};
A.CO=function(){var a=this;A.A.call(a);a.V=S;a.S=0;a.bX=0;};
A.Du=C(0);
A.BY=C(A.Bj);
A.Ce=C(A.BY);
A.CE=C(A.Ce);
A.B4=C(A.Bq);
A.CC=C(A.B4);
A.Cm=C(A.Bk);
A.CD=C(A.Cm);
A.Cy=C();
A.D4=C(0);
A.CB=C();
A.DK=C();
A.FB=function(a,b,c){return b!==null?A.DF(b,c): -A.DF(c,b)|0;};
A.DJ=C();
A.Cv=C();
A.DO=C(A.Y);
A.GX=null;A.B5=function(b,c){return Long_udiv(b, c);};
A.EW=function(b,c){return Long_urem(b, c);};
A.E_=function(){A.GX=I($rt_longcls());};
A.B_=C(A.F);
A.Cx=C(A.Bm);
A.BI=C(A.F);
A.D2=function(){var a=this;A.A.call(a);a.bJ=null;a.bu=null;a.bH=0;a.bD=0;};
A.BT=function(a,b){return A.Z(a.bu)<b?0:1;};
A.DG=C(A.BI);
A.D9=C(A.F);
A.Dq=C(A.F);
$rt_packages([]);
$rt_metadata([A.A,0,0,[],0,3,0,0,["H",Bu(A.FU),"bl",Bv(A.Fs)],A.Cb,0,A.A,[],0,3,0,0,0,A.Df,0,A.A,[],3,3,0,0,0,A.CM,0,A.A,[],3,3,0,0,0,A.Dy,0,A.A,[A.Df,A.CM],0,3,0,0,0,A.EX,0,A.A,[],4,0,0,0,0,A.EC,0,A.A,[],4,3,0,0,0,A.X,0,A.A,[],3,3,0,0,0,A.R,0,A.A,[],3,3,0,0,0,A.BA,0,A.A,[],3,3,0,0,0,A.BJ,0,A.A,[A.X,A.R,A.BA],0,3,0,0,["z",Bu(A.FA)],A.Br,0,A.A,[],0,3,0,0,0,A.Bm,0,A.Br,[],0,3,0,0,0,A.Bv,0,A.Bm,[],0,3,0,0,0,A.Ee,0,A.Bv,[],0,3,0,0,0,A.Y,0,A.A,[A.X],1,3,0,0,0,A.Bn,0,A.Y,[A.R],0,3,0,0,["z",Bu(A.Fn),"H",Bu(A.Fp),"bl",
Bv(A.FK)],A.Ck,0,A.A,[A.X,A.BA],0,0,0,0,["Z",Bv(A.CJ),"z",Bu(A.D)],A.Ct,0,A.A,[],3,3,0,0,0,A.CZ,0,A.Ck,[A.Ct],0,3,0,0,["z",Bu(A.Fz),"Z",Bv(A.FR)],A.Bt,0,A.Bv,[],0,3,0,0,0,A.Fg,0,A.Bt,[],0,3,0,0,0,A.EV,0,A.Bt,[],0,3,0,0,0,A.W,0,A.Br,[],0,3,0,0,0,A.F,0,A.W,[],0,3,0,0,0,A.Fd,0,A.A,[],4,3,0,0,0,A.D6,0,A.A,[],3,3,0,0,0,A.DY,0,A.A,[A.D6],0,3,0,0,0,A.B3,0,A.A,[],3,3,0,0,0,A.Ej,0,A.A,[A.B3],0,3,0,0,0,A.BU,0,A.A,[],3,3,0,0,0,A.C6,0,A.A,[A.BU],0,3,0,0,0,A.DB,0,A.A,[A.BU],0,3,0,0,0,A.Co,0,A.A,[],3,3,0,0,0,A.Cz,0,A.A,[A.Co],
0,3,0,0,0,A.Bb,0,A.A,[],3,3,0,0,0,A.CF,0,A.A,[A.Bb],3,3,0,0,0,A.CK,0,A.A,[A.CF],3,3,0,0,0,A.T,0,A.A,[A.Bb],3,3,0,0,0,A.EM,0,A.A,[A.CK,A.T],3,3,0,0,0,A.CS,0,A.A,[],4,3,0,0,0,A.C_,0,A.A,[A.Bb],3,3,0,0,0,A.CT,0,A.A,[A.C_],0,3,0,0,["dw",Bv(A.Ft)],A.C2,0,A.A,[A.T],3,3,0,0,0,A.Bo,0,A.A,[],3,3,0,0,0,A.CG,0,A.A,[A.Bo],0,3,0,0,0,A.Be,0,A.A,[A.R],0,3,0,0,0,A.Ev,0,A.A,[A.B3],0,3,0,0,0,A.DX,0,A.A,[A.T],3,3,0,0,0,A.CP,0,A.A,[A.T],3,3,0,0,0]);
$rt_metadata([A.DN,0,A.A,[A.T],3,3,0,0,0,A.CX,0,A.A,[A.T],3,3,0,0,0,A.Di,0,A.A,[A.T,A.DX,A.C2,A.CP,A.DN,A.CX],3,3,0,0,0,A.Da,0,A.A,[],3,3,0,0,0,A.Dr,0,A.A,[A.Bb],3,3,0,0,0,A.EY,0,A.A,[A.Bb,A.Di,A.Da,A.Dr],1,3,0,0,["cV",Bw(A.Fl),"cG",Bw(A.Fu),"cJ",Bv(A.FW),"cY",Bx(A.FZ),"dB",Bv(A.Fk),"dN",Bu(A.FI),"cZ",Bx(A.Fv)],A.Dv,0,A.A,[],3,3,0,0,0,A.Dt,0,A.A,[A.Dv],3,3,0,0,0,A.De,0,A.A,[],3,3,0,0,0,A.Bl,0,A.A,[A.Dt,A.De],1,3,0,0,0,A.Ch,0,A.Bl,[],0,3,0,0,0,A.DD,0,A.Ch,[],0,3,0,0,0,A.BO,0,A.Bl,[],1,3,0,0,0,A.BR,0,A.BO,[],
0,3,0,0,0,A.Dh,0,A.A,[],3,3,0,0,0,A.Bz,0,A.A,[A.Dh],3,3,0,0,0,A.Bj,0,A.A,[A.Bz],1,3,0,0,0,A.C4,0,A.A,[A.Bz],3,3,0,0,0,A.Bk,0,A.Bj,[A.C4],1,3,0,0,0,A.Bg,0,A.A,[],3,3,0,0,0,A.BS,0,A.A,[],3,3,0,0,0,A.Ed,0,A.Bk,[A.Bg,A.X,A.BS],0,3,0,0,0,A.Ca,0,A.A,[A.R],1,3,0,0,0,A.Ci,0,A.Ca,[],0,3,0,0,0,A.DU,0,A.A,[],0,3,0,0,0,A.Bi,0,A.A,[A.Bg,A.X],0,3,0,0,0,A.M,0,A.F,[],0,3,0,0,0,A.Fc,0,A.M,[],0,3,0,0,0,A.CL,0,A.W,[],0,3,0,0,0,A.L,0,A.F,[],0,3,0,0,0,A.B1,0,A.L,[],0,3,0,0,0,A.Bu,0,A.A,[],1,3,0,0,0,A.D5,0,A.A,[],3,3,0,0,0,A.B6,
0,A.Bu,[A.R,A.Ct,A.BA,A.D5],1,3,0,0,0,A.Ek,0,A.A,[],4,3,0,0,0,A.Cc,0,A.Bu,[A.R],1,3,0,0,0,A.By,0,A.A,[],0,3,0,0,0,A.Ez,0,A.A,[],0,3,0,0,0,A.BQ,0,A.B6,[],1,0,0,0,0,A.CQ,0,A.BQ,[],0,0,0,0,0,A.BM,0,A.A,[],1,3,0,0,0,A.BZ,0,A.A,[],0,3,0,0,0,A.D$,0,A.Cc,[],0,0,0,0,0,A.Bd,0,A.M,[],0,3,0,0,0,A.BP,0,A.A,[],4,3,0,0,0,A.Fb,0,A.A,[],4,0,0,0,0,A.EB,0,A.A,[],4,3,0,0,0,A.DS,0,A.A,[],0,3,0,0,0,A.Fe,0,A.A,[],4,3,0,0,0,A.Cq,0,A.BM,[],1,3,0,0,0]);
$rt_metadata([A.D7,0,A.Cq,[],0,3,0,0,0,A.C3,0,A.W,[],0,3,0,0,0,A.Fj,0,A.A,[],0,3,0,0,0,A.BL,0,A.A,[],3,3,0,0,0,A.DR,0,A.A,[A.BL],0,0,0,0,0,A.C5,0,A.A,[],3,3,0,0,0,A.Bq,0,A.A,[A.C5],1,3,0,0,0,A.EI,0,A.Bq,[A.Bg,A.X],0,3,0,0,0,A.EG,0,A.A,[],4,3,0,0,0,A.Bx,0,A.Y,[A.R],0,3,0,0,0,A.CV,0,A.A,[A.Bo],0,0,0,0,["bB",Bw(A.FO)],A.ER,0,A.A,[],4,3,0,0,0,A.CW,0,A.F,[],0,3,0,0,0,A.D_,0,A.F,[],0,3,0,0,0,A.CH,0,A.A,[],3,3,0,0,0,A.B$,0,A.A,[A.CH,A.Bg],0,0,0,0,0,A.BD,0,A.B$,[],0,0,0,0,0,A.S,0,A.A,[],0,3,0,0,0,A.Dz,0,A.F,[],0,3,
0,0,0,A.Bc,0,A.A,[],0,0,0,0,0,A.B9,0,A.A,[],4,3,0,0,0,A.CO,0,A.A,[],0,3,0,0,0,A.Du,0,A.A,[A.Bz],3,3,0,0,0,A.BY,0,A.Bj,[A.Du],1,3,0,0,0,A.Ce,0,A.BY,[],1,0,0,0,0,A.CE,0,A.Ce,[],0,0,0,0,0,A.B4,0,A.Bq,[],1,0,0,0,0,A.CC,0,A.B4,[],0,0,0,0,0,A.Cm,0,A.Bk,[A.BS],1,0,0,0,0,A.CD,0,A.Cm,[],0,0,0,0,0,A.Cy,0,A.A,[A.BL],0,0,0,0,0,A.D4,0,A.A,[A.BL],3,3,0,0,0,A.CB,0,A.A,[A.D4],0,0,0,0,0,A.DK,0,A.A,[A.Bo],0,3,0,0,["bB",Bw(A.FB)],A.DJ,0,A.A,[A.Bo],0,3,0,0,0,A.Cv,0,A.A,[],0,3,0,0,0,A.DO,0,A.Y,[A.R],0,3,0,0,0,A.B_,0,A.F,[],0,3,
0,0,0,A.Cx,0,A.Bm,[],0,3,0,0,0,A.BI,0,A.F,[],0,3,0,0,0,A.D2,0,A.A,[],0,3,0,0,0,A.DG,0,A.BI,[],0,3,0,0,0,A.D9,0,A.F,[],0,3,0,0,0,A.Dq,0,A.F,[],0,3,0,0,0]);
function $rt_array(cls,data){this.ey=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","\n","<br>"," ","&nbsp;","Col: ","js has been set up","null","[]","(this Collection)",", ","There is a tie!","Game ended without win or tie.","Player "," has won!","Scores: ",": ","} ","Best moves: "," Score: ","Gamelog: ","","┌───","┬───","┐\n"," │","│ ","│\n","└───","┴───","No legal moves.","play button clicked","String contains digits out of radix ","The value is too big for int type: ",
"String contains invalid digits: ","Game is already over","Tie alert","-screen","Win alert (or lose i guess)","String is null or empty","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","Illegal Column","Column is full.","Row or column is out of bounds.","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
A.BJ.prototype.toString=function(){return $rt_ustr(this);};
A.BJ.prototype.valueOf=A.BJ.prototype.toString;A.A.prototype.toString=function(){return $rt_ustr(A.FD(this));};
A.A.prototype.__teavm_class__=function(){return $dbg_class(this);};
var Long_eq;var Long_ne;var Long_gt;var Long_ge;var Long_lt;var Long_le;var Long_compare;var Long_add;var Long_sub;var Long_inc;var Long_dec;var Long_mul;var Long_div;var Long_rem;var Long_udiv;var Long_urem;var Long_neg;var Long_and;var Long_or;var Long_xor;var Long_shl;var Long_shr;var Long_shru;var Long_not;if(typeof $rt_globals.BigInt!=='function'){Long_eq=function(a,b){return a.hi===b.hi&&a.lo===b.lo;};Long_ne=function(a,b){return a.hi!==b.hi||a.lo!==b.lo;};Long_gt=function(a,b){if(a.hi<b.hi){return false;}if
(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};Long_ge=function(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};Long_lt=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};Long_le=function(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y
=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);};Long_add=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi
=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_inc=function(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);};Long_dec=function(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);};Long_neg=function(a){return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));};Long_sub=function(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>
31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};Long_compare=function(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo
>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};Long_mul=function(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi
>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);};Long_div=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)
<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];};Long_udiv=function(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];};Long_rem=function(a,b){if($rt_globals.Math.abs(a.hi)<Long_MAX_NORMAL&&$rt_globals.Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];};Long_urem=function(a,
b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];};function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive
?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new $rt_globals.Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a){return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}Long_and=function(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);};Long_or=function(a,b){return new Long(a.lo
|b.lo,a.hi|b.hi);};Long_xor=function(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);};Long_shl=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}};Long_shr=function(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}};Long_shru=function(a,b){b&=63;if(b===
0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}};Long_not=function(a){return new Long(~a.hi,~a.lo);};function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>
16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi
=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|
0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a){var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -
n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=
b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)
+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}}else {Long_eq=function(a,b){return a===b;};Long_ne=function(a,b){return a!==b;};Long_gt=function(a,b){return a>b;};Long_ge
=function(a,b){return a>=b;};Long_lt=function(a,b){return a<b;};Long_le=function(a,b){return a<=b;};Long_add=function(a,b){return $rt_globals.BigInt.asIntN(64,a+b);};Long_inc=function(a){return $rt_globals.BigInt.asIntN(64,a+1);};Long_dec=function(a){return $rt_globals.BigInt.asIntN(64,a -1);};Long_neg=function(a){return $rt_globals.BigInt.asIntN(64, -a);};Long_sub=function(a,b){return $rt_globals.BigInt.asIntN(64,a -b);};Long_compare=function(a,b){return a<b? -1:a>b?1:0;};Long_mul=function(a,b){return $rt_globals.BigInt.asIntN(64,
a*b);};Long_div=function(a,b){return $rt_globals.BigInt.asIntN(64,a/b);};Long_udiv=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)/$rt_globals.BigInt.asUintN(64,b));};Long_rem=function(a,b){return $rt_globals.BigInt.asIntN(64,a%b);};Long_urem=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)%$rt_globals.BigInt.asUintN(64,b));};Long_and=function(a,b){return $rt_globals.BigInt.asIntN(64,a&b);};Long_or=function(a,b){return $rt_globals.BigInt.asIntN(64,
a|b);};Long_xor=function(a,b){return $rt_globals.BigInt.asIntN(64,a^b);};Long_shl=function(a,b){return $rt_globals.BigInt.asIntN(64,a<<$rt_globals.BigInt(b&63));};Long_shr=function(a,b){return $rt_globals.BigInt.asIntN(64,a>>$rt_globals.BigInt(b&63));};Long_shru=function(a,b){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,a)>>$rt_globals.BigInt(b&63));};Long_not=function(a){return $rt_globals.BigInt.asIntN(64,~a);};}var H=Long_add;var Bg=Long_sub;var F=Long_mul;var L=Long_div;var X=Long_rem;var Bi
=Long_or;var J=Long_and;var BO=Long_xor;var P=Long_shl;var U=Long_shr;var O=Long_shru;var Bk=Long_compare;var T=Long_eq;var BP=Long_ne;var Bf=Long_lt;var W=Long_le;var Bb=Long_gt;var Z=Long_ge;var BQ=Long_not;var BR=Long_neg;
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(A.F_);
main.javaException=$rt_javaException;
(function(){var c;c=A.CT.prototype;c.handleEvent=c.dw;c=A.EY.prototype;c.dispatchEvent=c.dB;c.addEventListener=c.cV;c.removeEventListener=c.cG;c.getLength=c.dN;c.get=c.cJ;c.addEventListener=c.cZ;c.removeEventListener=c.cY;})();
})(this);
