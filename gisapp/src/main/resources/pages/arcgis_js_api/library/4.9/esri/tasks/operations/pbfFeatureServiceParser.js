// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/pbf ../../layers/graphics/OptimizedFeature ../../layers/graphics/OptimizedFeatureSet ../../layers/graphics/OptimizedGeometry".split(" "),function(z,p,t,u,v,q){function w(b){for(;b.next();)switch(b.tag()){case 1:return b.getString();case 2:return b.getFloat();case 3:return b.getDouble();case 4:return b.getSInt32();case 5:return b.getUInt32();case 6:return b.getInt64();case 7:return b.getUInt64();case 8:return b.getSInt64();case 9:return b.getBool();default:return b.skip(),
null}return null}function x(b){for(var k={type:0>=l.length?null:l[0]};b.next();)switch(b.tag()){case 1:k.name=b.getString();break;case 2:var g=b.getEnum();k.type=g>=l.length?null:l[g];break;case 3:k.alias=b.getString();break;case 4:g=b.getEnum();g=g>=r.length?null:r[g];k.sqlType=g;break;default:b.skip()}return k}function y(b,k){for(var g=new u.default,l=0;b.next();)switch(b.tag()){case 1:var a=b.getMessage(),e=k[l++].name;g.attributes[e]=w(a);break;case 2:for(var a=b.getMessage(),e=new q.default,
c=e.coords,f=e.lengths;a.next();)switch(a.tag()){case 2:for(var d=a.getUInt32(),d=a.pos()+d;a.pos()<d;)f.push(a.getUInt32());break;case 3:for(var d=a.getUInt32(),d=a.pos()+d,h=0;a.pos()<d;)c[h++]=a.getSInt64();break;default:a.skip()}g.geometry=e;break;case 4:a=b.getMessage();e=new q.default;for(c=e.coords;a.next();)switch(a.tag()){case 3:f=a.getUInt32();f=a.pos()+f;for(d=0;a.pos()<f;)c[d++]=a.getSInt64();break;default:a.skip()}g.centroid=e;break;default:b.skip()}return g}Object.defineProperty(p,"__esModule",
{value:!0});var l="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),r="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),
m=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],n=["upperLeft","lowerLeft"];p.parseFeatureQuery=function(b){b=new t(new Uint8Array(b),new DataView(b));for(var k={};b.next();)switch(b.tag()){case 2:for(var g=b.getMessage(),l={};g.next();)switch(g.tag()){case 1:var a=g.getMessage(),e=new v.default;for(e.geometryType=0>=m.length?null:m[0];a.next();)switch(a.tag()){case 1:e.objectIdFieldName=a.getString();break;case 3:e.globalIdFieldName=a.getString();break;
case 4:e.geohashFieldName=a.getString();break;case 5:for(var c=a.getMessage(),f={};c.next();)switch(c.tag()){case 1:f.shapeAreaFieldName=c.getString();break;case 2:f.shapeLengthFieldName=c.getString();break;case 3:f.units=c.getString();break;default:c.skip()}e.geometryProperties=f;break;case 7:c=a.getEnum();e.geometryType=c>=m.length?null:m[c];break;case 8:c=a.getMessage();for(f={};c.next();)switch(c.tag()){case 1:f.wkid=c.getUInt32();break;case 5:f.wkt=c.getString();break;default:c.skip()}e.spatialReference=
f;break;case 10:e.hasZ=a.getBool();break;case 11:e.hasM=a.getBool();break;case 12:c=a.getMessage();for(f={originPosition:0>=n.length?null:n[0]};c.next();)switch(c.tag()){case 1:var d=c.getEnum();f.originPosition=d>=n.length?null:n[d];break;case 2:for(var d=c.getMessage(),h=[0,0];d.next();)switch(d.tag()){case 1:h[0]=d.getDouble();break;case 2:h[1]=d.getDouble();break;case 3:h.push(d.getDouble());break;case 4:h.push(d.getDouble());break;default:d.skip()}f.scale=h;break;case 3:d=c.getMessage();for(h=
[0,0];d.next();)switch(d.tag()){case 1:h[0]=d.getDouble();break;case 2:h[1]=d.getDouble();break;case 3:h.push(d.getDouble());break;case 4:h.push(d.getDouble());break;default:d.skip()}f.translate=h;break;default:c.skip()}e.transform=f;break;case 9:c=a.getBool();e.exceededTransferLimit=c;break;case 13:c=a.getMessage();e.fields.push(x(c));break;case 15:c=a.getMessage();e.features.push(y(c,e.fields));break;default:a.skip()}l.featureResult=e;break;default:g.skip()}k.queryResult=l;break;default:b.skip()}return k}});