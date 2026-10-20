const works=[
{title:"汽水音乐实习",sub:"基础体验优化项目集",type:"PRODUCT EXPERIENCE",cover:"cover-1.png",file:"project-1.pdf",desc:"艺人主页改版、歌曲艺人关联错误反馈链路优化、多场景艺人认证标签。",year:"2026.10"},
{title:"小象超市实习",sub:"自助收银会员营销透传",type:"E-COMMERCE UX",cover:"cover-2.png",file:"project-2.pdf",desc:"围绕自助收银场景，设计会员营销信息透传与动效组件，打通线上线下促销转接。",year:"2026.04"},
{title:"唯品会改版",sub:"「好逛」逛不停 · 频道体验升级",type:"E-COMMERCE UX",cover:"cover-3.png",file:"project-3.pdf",desc:"从频道内容组织、商品浏览到优惠感知，探索更轻松、更连续的购物体验。",year:"2025.10"},
{title:"抖音电商笔试",sub:"商城春节领券体验优化设计",type:"UI / UX DESIGN",cover:"cover-4.png",file:"project-4.pdf",desc:"针对春节大促领券场景，完成优惠信息表达、路径引导与页面体验优化。",year:"2026.05"},
{title:"微信电商笔试",sub:"微信生态商品详情页设计",type:"UI / UX DESIGN",cover:"cover-5.png",file:"project-5.pdf",desc:"围绕商品信息、评价内容与购买决策，重构微信生态下的商品详情页层级。",year:"2026.05"},
{title:"大众点评笔试",sub:"附近页体验设计",type:"PRODUCT EXPERIENCE",cover:"cover-6.png",file:"project-6.pdf",desc:"以附近场景为核心，探索信息密度、内容发现与地图决策之间的平衡。",year:"2026.10"},
{title:"闲鱼运营设计",sub:"毕业季集卡活动营销设计",type:"VISUAL OPERATION",cover:"cover-7.png",file:"project-7.pdf",desc:"围绕毕业季情绪与活动机制，完成主题视觉、活动页面与运营物料设计。",year:"2025.08"},
{title:"汽水音乐笔试",sub:"听歌时长成就动效设计",type:"MOTION & UI",cover:"cover-8.png",file:"project-8.pdf",desc:"为听歌成就建立具有音乐感的动效表达，让数据反馈更有节奏与情绪。",year:"2026.06"}];
const asset=p=>`assets/${p}`, pdf=p=>`assets/${p}`;
const wall=document.querySelector("#hero-wall");
if(wall) wall.innerHTML=works.map((w,i)=>`<a class="wall-card wall-card-${i+1}" href="detail.html?id=${i}" aria-label="浏览${w.title}作品内容"><img src="${asset("covers/"+w.cover)}" alt="${w.title}作品封面"><span class="wall-tooltip">${w.title}</span></a>`).join("");
if(document.body.classList.contains("detail-body")){const w=works[Number(new URLSearchParams(location.search).get("id"))||0],i=works.indexOf(w);document.title=`${w.title} · 王毓馨作品集`;document.querySelector("#detail-kicker").textContent=`${String(i+1).padStart(2,"0")} / 08`;document.querySelector("#detail-tag").textContent=w.type;document.querySelector("#detail-title").textContent=w.title;document.querySelector("#detail-sub").textContent=w.sub;document.querySelector("#detail-desc").textContent=w.desc;document.querySelector("#detail-year").textContent=w.year;document.querySelector("#pdf-frame").src=pdf(w.file)+"#toolbar=0&navpanes=0&scrollbar=1";document.querySelector("#next-link").href=`detail.html?id=${(i+1)%works.length}`;}
