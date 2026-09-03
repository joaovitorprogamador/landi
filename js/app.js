const PLAN_LINKS = {
  starter: "#",
  pro: "#"
};
// TROQUE os "#" acima pelos links reais do seu checkout/login.

function openDemo(){
  document.getElementById("demoModal").classList.add("active");
  document.body.style.overflow="hidden";
}
function closeDemo(){
  document.getElementById("demoModal").classList.remove("active");
  document.body.style.overflow="";
}
function closeOutside(e){
  if(e.target.id==="demoModal") closeDemo();
}
function addDemoMessage(text, me=false){
  const box=document.getElementById("demoChat");
  const div=document.createElement("div");
  div.className="msg"+(me?" me":"");
  div.textContent=text;
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}
function showDemoOptions(items){
  const old=document.getElementById("demoOptions");
  if(old) old.remove();
  const wrap=document.createElement("div");
  wrap.className="options";
  wrap.id="demoOptions";
  items.forEach(item=>{
    const b=document.createElement("button");
    b.className="option";
    b.textContent=item;
    b.onclick=()=>demoChoice(item);
    wrap.appendChild(b);
  });
  document.getElementById("demoChat").appendChild(wrap);
}
function sendDemo(){
  const input=document.getElementById("demoInput");
  const name=input.value.trim();
  if(!name)return;
  addDemoMessage(name,true);
  input.value="";
  input.blur();
  setTimeout(()=>{
    addDemoMessage("Prazer, "+name+"! 🥰");
    addDemoMessage("O que você gostaria de fazer?");
    showDemoOptions(["🚀 Quero vender mais","🎯 Quero capturar leads","🤖 Quero automatizar meu atendimento"]);
  },450);
}
function demoName(){
  const input=document.getElementById("demoInput");
  input.value="João";
  sendDemo();
}
function demoChoice(choice){
  addDemoMessage(choice,true);
  const old=document.getElementById("demoOptions");
  if(old)old.remove();
  setTimeout(()=>{
    addDemoMessage("Perfeito! É exatamente esse tipo de jornada que você consegue montar no Jpga Gift Hub. 🚀");
    addDemoMessage("Quer acessar os planos ou continuar vendo a demonstração?");
    showDemoOptions(["💚 Acessar e escolher plano","▶ Continuar demonstração"]);
  },450);
}
function accessPlan(plan){
  const link=PLAN_LINKS[plan];
  if(link && link!=="#") window.location.href=link;
  else alert("Configure o link real do plano no código, em PLAN_LINKS.");
}
