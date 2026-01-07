localStorage.setItem("authToken", "truora_bypass");
const router = document.querySelector('#app').__vue_app__.config.globalProperties.$router;

router.push('/swechallenge/viewer');

setTimeout(() => { 
    debugger; 
    alert("Página");
}, 500);

