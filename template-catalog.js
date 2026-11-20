/* 20.000 variasi desain undangan: 20 palet x 10 font x 10 layout x 10 ornamen. */
(function(){
 const palettes=[
 ["Sage Romance","#536b59","#b58a5a"],["Rose Blush","#875b68","#d2a0a0"],["Royal Plum","#56344f","#c4a06a"],["Ocean Mist","#365d68","#b6a58a"],["Terracotta","#995b47","#d49a72"],
 ["Midnight Gold","#252b3a","#c5a46d"],["Lavender Dream","#716181","#c6a9d5"],["Olive Heritage","#596044","#b79a62"],["Dusty Blue","#536d83","#c5a77e"],["Champagne","#8d755b","#d7bd91"],
 ["Emerald Luxe","#24594b","#c6a35d"],["Coral Bloom","#a95759","#e0a18d"],["Mocha Cream","#765a4b","#c8a98b"],["Sakura Pink","#a66d80","#e7b9c8"],["Forest Classic","#354d3d","#b4a06c"],
 ["Silver Pearl","#5c6671","#c4cbd1"],["Sunset Peach","#b66f50","#e6bd93"],["Black Tie","#292929","#c2a16b"],["Mint Garden","#557b70","#b7c9a8"],["Cocoa Vintage","#6b5148","#b99b78"]
 ];
 const photos=[
 "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=1800&q=80",
 "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1800&q=80"
 ];
 const styles=["classic","royal","modern","garden","noir","terracotta"];
 const fonts=["'Playfair Display',serif","'Cormorant Garamond',serif","Georgia,serif","'DM Sans',sans-serif","'Trebuchet MS',sans-serif","'Palatino Linotype',serif","'Times New Roman',serif","Arial,sans-serif","Garamond,serif","'Courier New',monospace"];
 const ornaments=["❧","✦","❀","✧","❋","♡","✿","༺❀༻","❁","◇"];
 const layoutNames=["Classic Frame","Soft Rounded","Editorial","Floral Border","Minimal Line","Luxury Card","Modern Split","Vintage Paper","Garden Arch","Clean Gallery"];
 function generate(){
  const out=[];
  for(let p=0;p<20;p++) for(let f=0;f<10;f++) for(let l=0;l<10;l++) for(let o=0;o<10;o++){
   const v=palettes[p],base=styles[l%styles.length];
   out.push({id:"generated-"+out.length,name:v[0]+" • "+base+" • "+layoutNames[l]+" • Font "+(f+1)+" • Ornamen "+(o+1),theme_key:"g-"+base+"-f"+f+"-l"+l+"-o"+o,theme_primary:v[1],theme_accent:v[2],theme_bg:photos[p%photos.length],catalog_category:base,font_index:f,layout_index:l,ornament_index:o});
  }
  return out;
 }
 window.WeddingTemplateCatalog={generate,fonts,ornaments,total:20000};
 if(typeof builtins!=="undefined" && Array.isArray(builtins)) builtins.push(...generate().slice(6));
 if(typeof renderTemplateCards==="function"){
  const pageState={};
  renderTemplateCards=function(target,selectable){
   const host=document.getElementById(target);if(!host)return;
   if(pageState[target]===undefined)pageState[target]=0;
   let bar=document.getElementById(target+"SearchTools");
   if(!bar){
    bar=document.createElement("div");bar.id=target+"SearchTools";
    bar.style.cssText="display:grid;grid-template-columns:minmax(0,1fr) minmax(125px,190px);gap:8px;margin:12px 0";
    bar.innerHTML='<input type="search" placeholder="Cari 20.000 desain..." aria-label="Cari desain"><select aria-label="Kategori"><option value="">Semua gaya</option><option value="classic">Classic</option><option value="royal">Royal</option><option value="modern">Modern</option><option value="garden">Garden</option><option value="noir">Noir</option><option value="terracotta">Terracotta</option></select>';
    host.before(bar);
    bar.querySelector("input").addEventListener("input",()=>{pageState[target]=0;renderTemplateCards(target,selectable)});
    bar.querySelector("select").addEventListener("change",()=>{pageState[target]=0;renderTemplateCards(target,selectable)});
   }
   const q=bar.querySelector("input").value.toLowerCase(),cat=bar.querySelector("select").value;
   const all=allTemplates(),filtered=all.filter(t=>(!q||t.name.toLowerCase().includes(q)||t.theme_key.toLowerCase().includes(q))&&(!cat||t.theme_key.includes(cat)));
   const per=36,totalPages=Math.max(1,Math.ceil(filtered.length/per));pageState[target]=Math.min(pageState[target],totalPages-1);
   host.innerHTML="";
   filtered.slice(pageState[target]*per,(pageState[target]+1)*per).forEach(t=>{
    const card=document.createElement("button");card.type="button";card.className="template"+(selectable&&selectedTemplate?.id===t.id?" selected":"");
    const sw=document.createElement("div");sw.className="swatch";sw.style.setProperty("--p",t.theme_primary);sw.style.setProperty("--a",t.theme_accent);
    const name=document.createElement("b");name.textContent=t.name;const note=document.createElement("small");note.textContent=t.id.startsWith("custom-")?"Template saya":t.id.startsWith("generated-")?"Desain generator":"Template bawaan";
    card.append(sw,name,note);
    if(selectable)card.onclick=()=>{selectedTemplate=t;renderTemplateCards("chooseTemplates",true);updatePreview()};
    host.append(card);
   });
   let pager=document.getElementById(target+"PageTools");
   if(!pager){pager=document.createElement("div");pager.id=target+"PageTools";pager.className="row";pager.style.margin="12px 0";host.after(pager)}
   pager.innerHTML="";
   const label=document.createElement("span");label.className="muted";label.textContent=filtered.length.toLocaleString("id-ID")+" desain • halaman "+(pageState[target]+1)+" dari "+totalPages;
   const prev=document.createElement("button");prev.className="btn alt";prev.textContent="← Sebelumnya";prev.disabled=pageState[target]===0;prev.onclick=()=>{pageState[target]--;renderTemplateCards(target,selectable)};
   const next=document.createElement("button");next.className="btn alt";next.textContent="Berikutnya →";next.disabled=pageState[target]>=totalPages-1;next.onclick=()=>{pageState[target]++;renderTemplateCards(target,selectable)};
   pager.append(label,prev,next);
  };
 }
})();