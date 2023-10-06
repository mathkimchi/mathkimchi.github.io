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
{superclass.call(this);};}function $rt_setCloneMethod(target, f){target.K=f;}
function $rt_cls(cls){return A.DB(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return A.Dz(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.g.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return A.A; }
function $rt_stecls(){return A.A;}
function $rt_throwableMessage(t){return A.Ds(t);}
function $rt_throwableCause(t){return A.Dv(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A.DG());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return A.DH(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var D=$rt_throw;var L=$rt_compare;var M=$rt_nullCheck;var G=$rt_cls;var J=$rt_createArray;var K=$rt_isInstance;var N=$rt_nativeThread;var O=$rt_suspending;var P=$rt_resuming;var Q=$rt_invalidPointer;var C=$rt_s;var E=$rt_eraseClinit;var R=$rt_imul;var I=$rt_wrapException;var S=$rt_checkBounds;var T=$rt_checkUpperBound;var U=$rt_checkLowerBound;var V=$rt_wrapFunction0;var W=$rt_wrapFunction1;var X=$rt_wrapFunction2;var Y=$rt_wrapFunction3;var Z=$rt_wrapFunction4;var B=$rt_classWithoutFields;var Ba=$rt_createArrayFromData;var Bb
=$rt_createCharArrayFromData;var Bc=$rt_createByteArrayFromData;var Bd=$rt_createShortArrayFromData;var Be=$rt_createIntArrayFromData;var Bf=$rt_createBooleanArrayFromData;var Bg=$rt_createFloatArrayFromData;var Bh=$rt_createDoubleArrayFromData;var Bi=$rt_createLongArrayFromData;var Bj=$rt_createBooleanArray;var H=$rt_createByteArray;var Bk=$rt_createShortArray;var F=$rt_createCharArray;var Bl=$rt_createIntArray;var Bm=$rt_createLongArray;var Bn=$rt_createFloatArray;var Bo=$rt_createDoubleArray;var L=$rt_compare;var Bp
=$rt_castToClass;var Bq=$rt_castToInterface;var Br=Long_toNumber;var Bs=Long_fromInt;var Bt=Long_fromNumber;var Bu=Long_create;var Bv=Long_ZERO;var Bw=Long_hi;var Bx=Long_lo;
A.A=function(){this.$id$=0;};
A.Dp=function(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=C(0);else{if(!d)f=32;else{g=0;f=d>>>16;if(f)g=16;else f=d;h=f>>>8;if(!h)h=f;else g=g|8;i=h>>>4;if(!i)i=h;else g=g|4;f=i>>>2;if(!f)f=i;else g=g|2;if(f>>>1)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=F(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){i=f+1|0;l[f]=A.Bs(d>>>j&15,16);j=j-4|0;f=i;}e=A.Dz(k);}b=A.L();A.C(A.C(b,C(1)),e);return A.J(b);};
A.Dk=function(a){var b,c,d;if(!K(a,A.Ce)&&a.constructor.$meta.item===null){b=new A.BW;A.G(b);D(b);}b=A.Dj(a);c=b;d=$rt_nextId();c.$id$=d;return b;};
A.CG=B();
A.Dx=function(b){var c,d,e,f,g;A.CW();A.CT();A.Cv();A.CH();A.CS();A.CL();A.CI();A.CV();c=$rt_globals.window.document;d=c.createElement("div");e=c.createTextNode("Java TeaVM generated element");d.appendChild(e);c.body.appendChild(d);f=c.createElement("div");g=new A.BX;f.addEventListener("callJavaMethod",A.Dh(g,"handleEvent"));e=null;d=null;f.setAttribute($rt_ustr(e),$rt_ustr(d));e="javaMethodCaller";f.id=e;c.body.appendChild(f);A.BL(A.C0(),C(2));};
A.BI=B(0);
A.BZ=B(0);
A.BY=function(){A.A.call(this);this.bo=null;};
A.DB=function(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new A.BY;c.bo=b;d=c;b.classObject=d;}return c;};
A.CN=B();
A.Dh=function(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();};
A.BE=function(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;};
A.C1=B();
A.Dj=function(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;};
A.Bb=B(0);
A.N=B(0);
A.Be=B(0);
A.U=function(){var a=this;A.A.call(a);a.g=null;a.j=0;};
A.DI=null;A.Dz=function(a){var b=new A.U();A.Cy(b,a);return b;};
A.Cy=function(a,b){var c,d,e,f;b=b.data;c=b.length;d=F(c);e=d.data;a.g=d;f=0;while(f<c){e[f]=b[f];f=f+1|0;}};
A.Z=function(a,b){var c,d;if(b>=0){c=a.g.data;if(b<c.length)return c[b];}d=new A.BB;A.G(d);D(d);};
A.I=function(a){return a.g.data.length;};
A.BJ=function(a){return a.g.data.length?0:1;};
A.Dw=function(a,b){var c;if(a===b)return 1;if(!(b instanceof A.U))return 0;if(A.I(b)!=A.I(a))return 0;c=0;while(c<A.I(b)){if(A.Z(a,c)!=A.Z(b,c))return 0;c=c+1|0;}return 1;};
A.Dm=function(a){var b,c,d,e;a:{if(!a.j){b=a.g.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.j=(31*a.j|0)+e|0;d=d+1|0;}}}return a.j;};
A.CW=function(){A.DI=new A.BQ;};
A.S=function(){var a=this;A.A.call(a);a.G=null;a.C=null;a.s=0;a.r=0;};
A.DJ=function(a){var b=new A.S();A.E(b,a);return b;};
A.DK=function(a){var b=new A.S();A.CU(b,a);return b;};
A.E=function(a,b){a.s=1;a.r=1;a.G=b;};
A.CU=function(a,b){a.s=1;a.r=1;a.C=b;};
A.Dr=function(a){return a;};
A.Ds=function(a){return a.G;};
A.Dv=function(a){var b;b=a.C;if(b===a)b=null;return b;};
A.Y=B(A.S);
A.X=B(A.Y);
A.Cz=B(A.X);
A.Bq=B();
A.Ca=B(A.Bq);
A.DL=null;A.CT=function(){A.DL=G($rt_intcls());};
A.By=function(){var a=this;A.A.call(a);a.a=null;a.b=0;};
A.CC=function(a,b){a.b=b;};
A.Bd=function(a,b,c){var d,e,f,g;d=a.b;e=d-b|0;A.B$(a,(d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.a.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.b=a.b+(c-b|0)|0;};
A.BG=B(0);
A.CR=B(A.By);
A.L=function(){var a=new A.CR();A.Do(a);return a;};
A.Do=function(a){a.a=F(16);};
A.C=function(a,b){var c;c=a.b;if(b===null)b=C(3);A.Cg(a,c,b);return a;};
A.F=function(a,b){var c,d,e,f,g,h,i;c=a.b;d=1;if(b<0){d=0;b= -b|0;}a:{if(b<10){if(d)A.Bd(a,c,c+1|0);else{A.Bd(a,c,c+2|0);e=a.a.data;f=c+1|0;e[c]=45;c=f;}a.a.data[c]=A.Bs(b,10);}else{g=1;h=1;b:{while(true){f=g*10|0;if(f>b){f=g;break b;}h=h+1|0;if(f>214748364)break;g=f;}}if(!d)h=h+1|0;A.Bd(a,c,c+h|0);if(d)i=c;else{e=a.a.data;i=c+1|0;e[c]=45;}while(true){if(f<=0)break a;e=a.a.data;g=i+1|0;e[i]=A.Bs(b/f|0,10);b=b%f|0;f=f/10|0;i=g;}}}return a;};
A.Bf=function(a,b){var c;c=a.b;A.Bd(a,c,c+1|0);a.a.data[c]=b;return a;};
A.J=function(a){var b,c,d,e,f,g;b=new A.U;c=a.a;d=a.b;e=F(d);f=e.data;b.g=e;g=0;while(g<d){f[g]=c.data[g+0|0];g=g+1|0;}return b;};
A.B$=function(a,b){var c,d,e,f;c=a.a.data.length;if(c<b){b=c>=1073741823?2147483647:A.B_(b,A.B_(c*2|0,5));d=a.a.data;e=F(b);f=e.data;b=A.Br(b,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.a=e;}};
A.Cg=function(a,b,c){var d,e,f;if(b>=0&&b<=a.b){a:{if(c===null)c=C(3);else if(A.BJ(c))break a;A.B$(a,a.b+A.I(c)|0);d=a.b-1|0;while(d>=b){a.a.data[d+A.I(c)|0]=a.a.data[d];d=d+(-1)|0;}a.b=a.b+A.I(c)|0;d=0;while(d<A.I(c)){e=a.a.data;f=b+1|0;e[b]=A.Z(c,d);d=d+1|0;b=f;}}return a;}c=new A.BB;A.G(c);D(c);};
A.T=B(A.X);
A.C4=B(A.T);
A.DM=function(a){var b=new A.C4();A.Dt(b,a);return b;};
A.Dt=function(a,b){A.E(a,b);};
A.CK=B(A.T);
A.DN=function(a){var b=new A.CK();A.Dd(b,a);return b;};
A.Dd=function(a,b){A.E(a,b);};
A.O=B(A.S);
A.DO=function(){var a=new A.O();A.G(a);return a;};
A.G=function(a){a.s=1;a.r=1;};
A.D=B(A.O);
A.DH=function(a){var b=new A.D();A.Dc(b,a);return b;};
A.Dc=function(a,b){A.E(a,b);};
A.P=B(0);
A.BP=B(0);
A.BV=B(0);
A.K=B(0);
A.Cx=B(0);
A.Ck=B(0);
A.BX=B();
A.C9=function(a,b){A.BL(A.C0(),C(4));};
A.B5=B();
A.DP=null;A.C0=function(){var b;if(A.DP===null){b=new A.B2;b.S=A.DQ;b.k=A.L();b.T=F(32);b.bi=0;b.I=A.DR;A.DP=b;}return A.DP;};
A.C3=B();
A.Cf=B(0);
A.Cb=B(0);
A.B3=B(0);
A.B9=B(0);
A.B7=B(0);
A.BK=B(0);
A.Cm=B(0);
A.BS=B(0);
A.CO=B();
A.Db=function(a,b,c){a.bE($rt_str(b),A.BE(c,"handleEvent"));};
A.Df=function(a,b,c){a.b8($rt_str(b),A.BE(c,"handleEvent"));};
A.Dn=function(a,b){return a.bw(b);};
A.Du=function(a,b,c,d){a.bR($rt_str(b),A.BE(c,"handleEvent"),d?1:0);};
A.Da=function(a,b){return !!a.bQ(b);};
A.C$=function(a){return a.b7();};
A.Dg=function(a,b,c,d){a.bS($rt_str(b),A.BE(c,"handleEvent"),d?1:0);};
A.BU=B(0);
A.BT=B(0);
A.Cs=B(0);
A.V=B();
A.Bv=function(){A.V.call(this);this.S=null;};
A.B2=function(){var a=this;A.Bv.call(a);a.bi=0;a.t=0;a.k=null;a.T=null;a.I=null;};
A.B8=function(a,b,c,d){var e,$$je;e=a.S;if(e===null)a.t=1;if(!(a.t?0:1))return;a:{try{A.Cw(e,b,c,d);break a;}catch($$e){$$je=I($$e);if($$je instanceof A.Cc){}else{throw $$e;}}a.t=1;}};
A.BL=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$$je;c=a.k;A.Cg(c,c.b,b);A.Bf(c,10);b=a.k;d=b.b;e=a.T;if(d>e.data.length)e=F(d);f=0;g=0;if(f>d){b=new A.H;A.E(b,C(5));D(b);}while(f<d){h=e.data;i=g+1|0;j=b.a.data;k=f+1|0;h[g]=j[f];g=i;f=k;}h=e.data;f=d-0|0;l=new A.B4;d=h.length;f=0+f|0;A.Cj(l,d);l.c=0;l.d=f;l.w=0;l.X=0;l.M=e;e=H(A.B_(16,A.Br(d,1024)));f=e.data.length;b=new A.Cr;i=0+f|0;A.Cj(b,f);b.bn=A.DS;b.N=0;b.y=e;b.c=0;b.d=i;b.bh=0;b.z=0;c=a.I;m=new A.Cn;h=H(1);j=h.data;j[0]=63;n=A.DT;m.n=n;m.o=n;g=j.length;if
(g&&g>=m.u){m.bk=c;m.x=h.K();m.U=2.0;m.u=4.0;m.v=F(512);m.F=H(512);c=A.DU;if(c===null){c=new A.R;A.E(c,C(6));D(c);}m.n=c;m.o=c;while(m.m!=3){m.m=2;a:{while(true){try{c=A.Cu(m,l,b);}catch($$e){$$je=I($$e);if($$je instanceof A.D){b=$$je;c=new A.BN;A.CU(c,b);D(c);}else{throw $$e;}}if(c.i?0:1){f=A.M(l);if(f<=0)break a;c=A.BH(f);}else if(A.BA(c))break;n=!A.Cp(c)?m.n:m.o;b:{if(n!==A.DU){if(n===A.DV)break b;else break a;}f=A.M(b);h=m.x;k=h.data.length;if(f<k){c=A.DW;break a;}A.Ct(b,h,0,k);}k=l.c;if(!A.CM(c)){b=new A.Bc;A.G(b);D(b);}A.BO(l,
k+c.L|0);}}f=A.BA(c);A.B8(a,e,0,b.c);A.B0(b);if(!f){while(true){f=m.m;if(f!=2&&f!=4){b=new A.Bl;A.G(b);D(b);}c=A.DX;if(c===c)m.m=3;g=A.BA(c);A.B8(a,e,0,b.c);A.B0(b);if(!g)break;}A.CC(a.k,0);return;}}b=new A.Bl;A.G(b);D(b);}D(A.Dy(C(7)));};
A.Bk=function(){A.V.call(this);this.W=null;};
A.Bt=B(A.Bk);
A.DQ=null;A.Cw=function(a,b,c,d){var e;e=0;while(e<d){$rt_putStdout(b.data[e+c|0]&255);e=e+1|0;}};
A.Cv=function(){var b;b=new A.Bt;b.W=H(1);A.DQ=b;};
A.Ch=B(0);
A.BQ=B();
A.Bi=B();
A.DY=null;A.DZ=null;A.Cd=function(b){return (b&64512)!=55296?0:1;};
A.B1=function(b){return (b&64512)!=56320?0:1;};
A.Bs=function(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;};
A.CH=function(){A.DY=G($rt_charcls());A.DZ=J(A.Bi,128);};
A.Bm=function(){var a=this;A.A.call(a);a.bg=null;a.bd=null;};
A.CY=function(b){var c,d;if(A.BJ(b))D(A.CB(b));if(!A.CZ(A.Z(b,0)))D(A.CB(b));c=1;while(c<A.I(b)){a:{d=A.Z(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(A.CZ(d))break a;else D(A.CB(b));}}c=c+1|0;}};
A.CZ=function(b){a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
A.Bw=B(A.Bm);
A.DR=null;A.CS=function(){var b,c,d,e,f;b=new A.Bw;c=J(A.U,0);d=c.data;A.CY(C(8));e=d.length;f=0;while(f<e){A.CY(d[f]);f=f+1|0;}b.bg=C(8);b.bd=c.K();A.DR=b;};
A.R=B(A.D);
A.Dy=function(a){var b=new A.R();A.Dq(b,a);return b;};
A.Dq=function(a,b){A.E(a,b);};
A.C2=function(){A.R.call(this);this.V=null;};
A.CB=function(a){var b=new A.C2();A.C_(b,a);return b;};
A.C_=function(a,b){A.G(a);a.V=b;};
A.Ce=B(0);
A.BW=B(A.O);
A.H=B(A.D);
A.BB=B(A.H);
A.W=function(){var a=this;A.A.call(a);a.E=0;a.c=0;a.d=0;a.l=0;};
A.Cj=function(a,b){a.l=(-1);a.E=b;a.d=b;};
A.M=function(a){return a.d-a.c|0;};
A.Q=function(a){return a.c>=a.d?0:1;};
A.Cl=B(0);
A.BD=B(A.W);
A.BO=function(a,b){var c,d,e;if(b>=0&&b<=a.d){a.c=b;if(b<a.l)a.l=0;return a;}c=new A.R;d=a.d;e=A.L();A.Bf(A.F(A.C(A.F(A.C(e,C(9)),b),C(10)),d),93);A.E(c,A.J(e));D(c);};
A.CF=B();
A.Br=function(b,c){if(b<c)c=b;return c;};
A.B_=function(b,c){if(b>c)c=b;return c;};
A.Bo=function(){var a=this;A.W.call(a);a.N=0;a.y=null;a.bn=null;};
A.Ct=function(a,b,c,d){var e,f,g,h,i,j,k,l,m;if(!d)return a;if(a.z){e=new A.B6;A.G(e);D(e);}if(A.M(a)<d){e=new A.Cq;A.G(e);D(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){i=new A.H;j=A.L();A.F(A.C(A.F(A.C(j,C(11)),h),C(12)),g);A.E(i,A.J(j));D(i);}if(d<0){e=new A.H;i=A.L();A.C(A.F(A.C(i,C(13)),d),C(14));A.E(e,A.J(i));D(e);}h=a.c;k=h+a.N|0;l=0;while(l<d){b=a.y.data;m=k+1|0;g=c+1|0;b[k]=f[c];l=l+1|0;k=m;c=g;}a.c=h+d|0;return a;}}b=b.data;e=new A.H;d=b.length;i=A.L();A.Bf(A.F(A.C(A.F(A.C(i,C(15)),c),
C(10)),d),41);A.E(e,A.J(i));D(e);};
A.B0=function(a){a.c=0;a.d=a.E;a.l=(-1);return a;};
A.Ba=function(){A.A.call(this);this.ba=null;};
A.DV=null;A.DU=null;A.DT=null;A.CD=function(a){var b=new A.Ba();A.CQ(b,a);return b;};
A.CQ=function(a,b){a.ba=b;};
A.CL=function(){A.DV=A.CD(C(16));A.DU=A.CD(C(17));A.DT=A.CD(C(18));};
A.Bp=B(A.BD);
A.B4=function(){var a=this;A.Bp.call(a);a.X=0;a.w=0;a.M=null;};
A.Bj=function(){var a=this;A.A.call(a);a.bk=null;a.x=null;a.U=0.0;a.u=0.0;a.n=null;a.o=null;a.m=0;};
A.Bx=function(){var a=this;A.A.call(a);a.i=0;a.L=0;};
A.DX=null;A.DW=null;A.CJ=function(a,b){var c=new A.Bx();A.CX(c,a,b);return c;};
A.CX=function(a,b,c){a.i=b;a.L=c;};
A.BA=function(a){return a.i!=1?0:1;};
A.CM=function(a){var b;b=a.i!=2?0:1;return !b&&!A.Cp(a)?0:1;};
A.Cp=function(a){return a.i!=3?0:1;};
A.BH=function(b){return A.CJ(2,b);};
A.CI=function(){A.DX=A.CJ(0,0);A.DW=A.CJ(1,0);};
A.Cr=function(){var a=this;A.Bo.call(a);a.bh=0;a.z=0;};
A.Bn=function(){A.A.call(this);this.bc=null;};
A.DS=null;A.D0=null;A.De=function(a){var b=new A.Bn();A.CA(b,a);return b;};
A.CA=function(a,b){a.bc=b;};
A.CV=function(){A.DS=A.De(C(19));A.D0=A.De(C(20));};
A.BC=function(){var a=this;A.Bj.call(a);a.v=null;a.F=null;};
A.Cu=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.v;e=0;f=0;g=a.F;a:{b:{while(true){if((e+32|0)>f&&A.Q(b)){h=e;while(h<f){i=d.data;i[h-e|0]=i[h];h=h+1|0;}i=d.data;j=f-e|0;k=A.M(b)+j|0;h=i.length;f=A.Br(k,h);e=f-j|0;if(j<0)break b;if(j>=h)break b;k=j+e|0;if(k>h){l=new A.H;b=A.L();A.F(A.C(A.F(A.C(b,C(21)),k),C(12)),h);A.E(l,A.J(b));D(l);}if(A.M(b)<e)break;if(e<0){b=new A.H;c=A.L();A.C(A.F(A.C(c,C(13)),e),C(14));A.E(b,A.J(c));D(b);}h=b.c;m=0;n=h;while(m<e){o=j+1|0;k=n+1|0;i[j]=b.M.data[n+b.w|0];m=m+1|0;j=
o;n=k;}b.c=h+e|0;e=0;}if(!A.Q(c)){l=!A.Q(b)&&e>=f?A.DX:A.DW;break a;}i=g.data;k=A.Br(A.M(c),i.length);p=new A.Ci;p.P=b;p.D=c;l=A.CP(a,d,e,f,g,0,k,p);e=p.O;j=p.J;if(l===null){if(!A.Q(b)&&e>=f)l=A.DX;else if(!A.Q(c)&&e>=f)l=A.DW;}A.Ct(c,g,0,j);if(l!==null)break a;}b=new A.BR;A.G(b);D(b);}p=new A.H;l=A.L();A.Bf(A.F(A.C(A.F(A.C(l,C(15)),j),C(10)),h),41);A.E(p,A.J(l));D(p);}A.BO(b,b.c-(f-e|0)|0);return l;};
A.Cn=B(A.BC);
A.CP=function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(A.Bu(h,2))break a;i=A.DW;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!(!A.Cd(l)&&!A.B1(l)?0:1)){if((f+3|0)>g){j=j+(-1)|0;if(A.Bu(h,3))break a;i=A.DW;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24
>>24;}else{if(!A.Cd(l)){i=A.BH(1);break a;}if(j>=d){if(A.Q(h.P))break a;i=A.DX;break a;}c=j+1|0;n=k[j];if(!A.B1(n)){j=c+(-2)|0;i=A.BH(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(A.Bu(h,4))break a;i=A.DW;break a;}k=e.data;o=((l&1023)<<10|n&1023)+65536|0;n=f+1|0;k[f]=(240|o>>18)<<24>>24;f=n+1|0;k[n]=(128|o>>12&63)<<24>>24;n=f+1|0;k[f]=(128|o>>6&63)<<24>>24;m=n+1|0;k[n]=(128|o&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.O=j;h.J=f;return i;};
A.Cc=B(A.O);
A.C5=B();
A.Bl=B(A.D);
A.BN=B(A.Y);
A.C7=B();
A.Bc=B(A.D);
A.Ci=function(){var a=this;A.A.call(a);a.P=null;a.D=null;a.O=0;a.J=0;};
A.Bu=function(a,b){return A.M(a.D)<b?0:1;};
A.B6=B(A.Bc);
A.Cq=B(A.D);
A.BR=B(A.D);
$rt_packages([]);
$rt_metadata([A.A,0,0,[],0,3,0,0,0,A.CG,0,A.A,[],0,3,0,0,0,A.BI,0,A.A,[],3,3,0,0,0,A.BZ,0,A.A,[],3,3,0,0,0,A.BY,0,A.A,[A.BI,A.BZ],0,3,0,0,0,A.CN,0,A.A,[],4,0,0,0,0,A.C1,0,A.A,[],4,3,0,0,0,A.Bb,0,A.A,[],3,3,0,0,0,A.N,0,A.A,[],3,3,0,0,0,A.Be,0,A.A,[],3,3,0,0,0,A.U,0,A.A,[A.Bb,A.N,A.Be],0,3,0,0,0,A.S,0,A.A,[],0,3,0,0,0,A.Y,0,A.S,[],0,3,0,0,0,A.X,0,A.Y,[],0,3,0,0,0,A.Cz,0,A.X,[],0,3,0,0,0,A.Bq,0,A.A,[A.Bb],1,3,0,0,0,A.Ca,0,A.Bq,[A.N],0,3,0,0,0,A.By,0,A.A,[A.Bb,A.Be],0,0,0,0,0,A.BG,0,A.A,[],3,3,0,0,0,A.CR,0,A.By,
[A.BG],0,3,0,0,0,A.T,0,A.X,[],0,3,0,0,0,A.C4,0,A.T,[],0,3,0,0,0,A.CK,0,A.T,[],0,3,0,0,0,A.O,0,A.S,[],0,3,0,0,0,A.D,0,A.O,[],0,3,0,0,0,A.P,0,A.A,[],3,3,0,0,0,A.BP,0,A.A,[A.P],3,3,0,0,0,A.BV,0,A.A,[A.BP],3,3,0,0,0,A.K,0,A.A,[A.P],3,3,0,0,0,A.Cx,0,A.A,[A.BV,A.K],3,3,0,0,0,A.Ck,0,A.A,[A.P],3,3,0,0,0,A.BX,0,A.A,[A.Ck],0,3,0,0,["bH",W(A.C9)],A.B5,0,A.A,[],4,3,0,0,0,A.C3,0,A.A,[],4,3,0,0,0,A.Cf,0,A.A,[A.K],3,3,0,0,0,A.Cb,0,A.A,[A.K],3,3,0,0,0,A.B3,0,A.A,[A.K],3,3,0,0,0,A.B9,0,A.A,[A.K],3,3,0,0,0,A.B7,0,A.A,[A.K],3,
3,0,0,0,A.BK,0,A.A,[A.K,A.Cf,A.Cb,A.B3,A.B9,A.B7],3,3,0,0,0,A.Cm,0,A.A,[],3,3,0,0,0,A.BS,0,A.A,[A.P],3,3,0,0,0,A.CO,0,A.A,[A.P,A.BK,A.Cm,A.BS],1,3,0,0,["bU",X(A.Db),"bA",X(A.Df),"bD",W(A.Dn),"bY",Y(A.Du),"bO",W(A.Da),"b1",V(A.C$),"bZ",Y(A.Dg)],A.BU,0,A.A,[],3,3,0,0,0,A.BT,0,A.A,[A.BU],3,3,0,0,0,A.Cs,0,A.A,[],3,3,0,0,0,A.V,0,A.A,[A.BT,A.Cs],1,3,0,0,0,A.Bv,0,A.V,[],0,3,0,0,0,A.B2,0,A.Bv,[],0,3,0,0,0,A.Bk,0,A.V,[],1,3,0,0,0]);
$rt_metadata([A.Bt,0,A.Bk,[],0,3,0,0,0,A.Ch,0,A.A,[],3,3,0,0,0,A.BQ,0,A.A,[A.Ch],0,3,0,0,0,A.Bi,0,A.A,[A.N],0,3,0,0,0,A.Bm,0,A.A,[A.N],1,3,0,0,0,A.Bw,0,A.Bm,[],0,3,0,0,0,A.R,0,A.D,[],0,3,0,0,0,A.C2,0,A.R,[],0,3,0,0,0,A.Ce,0,A.A,[],3,3,0,0,0,A.BW,0,A.O,[],0,3,0,0,0,A.H,0,A.D,[],0,3,0,0,0,A.BB,0,A.H,[],0,3,0,0,0,A.W,0,A.A,[],1,3,0,0,0,A.Cl,0,A.A,[],3,3,0,0,0,A.BD,0,A.W,[A.N,A.BG,A.Be,A.Cl],1,3,0,0,0,A.CF,0,A.A,[],4,3,0,0,0,A.Bo,0,A.W,[A.N],1,3,0,0,0,A.Ba,0,A.A,[],0,3,0,0,0,A.Bp,0,A.BD,[],1,0,0,0,0,A.B4,0,A.Bp,
[],0,0,0,0,0,A.Bj,0,A.A,[],1,3,0,0,0,A.Bx,0,A.A,[],0,3,0,0,0,A.Cr,0,A.Bo,[],0,0,0,0,0,A.Bn,0,A.A,[],4,3,0,0,0,A.BC,0,A.Bj,[],1,3,0,0,0,A.Cn,0,A.BC,[],0,3,0,0,0,A.Cc,0,A.O,[],0,3,0,0,0,A.C5,0,A.A,[],4,3,0,0,0,A.Bl,0,A.D,[],0,3,0,0,0,A.BN,0,A.Y,[],0,3,0,0,0,A.C7,0,A.A,[],0,3,0,0,0,A.Bc,0,A.D,[],0,3,0,0,0,A.Ci,0,A.A,[],0,3,0,0,0,A.B6,0,A.Bc,[],0,3,0,0,0,A.Cq,0,A.D,[],0,3,0,0,0,A.BR,0,A.D,[],0,3,0,0,0]);
function $rt_array(cls,data){this.ck=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Hello World from Java","null","Hehehe ha","Index out of bounds","Action must be non-null","Replacement preconditions do not hold","UTF-8","New position "," is outside of range [0;","The last byte in src "," is outside of array of size ","Length "," must be non-negative","Offset ","IGNORE","REPLACE","REPORT","BIG_ENDIAN","LITTLE_ENDIAN","The last char in dst "]);
A.U.prototype.toString=function(){return $rt_ustr(this);};
A.U.prototype.valueOf=A.U.prototype.toString;A.A.prototype.toString=function(){return $rt_ustr(A.Dp(this));};
A.A.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(A.Dx);
main.javaException=$rt_javaException;
(function(){var c;c=A.BX.prototype;c.handleEvent=c.bH;c=A.CO.prototype;c.dispatchEvent=c.bO;c.addEventListener=c.bU;c.removeEventListener=c.bA;c.getLength=c.b1;c.get=c.bD;c.addEventListener=c.bZ;c.removeEventListener=c.bY;})();
})(this);
