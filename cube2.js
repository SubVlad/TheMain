let W = document.activeElement.clientWidth;
let H = document.activeElement.clientHeight;
let canv = document.getElementById("canvas");
let ctx = canv.getContext("2d");
canv.width = window.innerWidth;
canv.height = window.innerHeight;


let a = [50, 50, -50];
let b = [-50, 50, -50];
let c = [-50, -50, -50];
let d = [50, -50, -50];
let e = [50, 50, 50];
let f = [-50, 50, 50];
let g = [-50, -50, 50];
let h = [50, -50, 50];

let axis1 = [0, -50, 0];
let axis2 = [0, 50, 0];

let time = 0;



let aa = Math.sqrt((a[0]-axis2[0])**2 + (a[2]-axis2[2])**2);
let aAsinZ = Math.asin((a[2]) /aa);
let aAsinX = Math.asin((a[0]) /aa);

let bAsinZ = Math.asin((b[2]) /aa);
let bAsinX = Math.asin((b[0]) /aa);

let cAsinZ = Math.asin((c[2]) /aa);
let cAsinX = Math.asin((c[0]) /aa);

let dAsinZ = Math.asin((d[2]) /aa);
let dAsinX = Math.asin((d[0]) /aa);

let eAsinZ = Math.asin((e[2]) /aa);
let eAsinX = Math.asin((e[0]) /aa);

let fAsinZ = Math.asin((f[2]) /aa);
let fAsinX = Math.asin((f[0]) /aa);

let gAsinZ = Math.asin((g[2]) /aa);
let gAsinX = Math.asin((g[0]) /aa);

let hAsinZ = Math.asin((h[2]) /aa);
let hAsinX = Math.asin((h[0]) /aa);


function rotateCube(){

	

	let a2sin = Math.sin(aAsinZ + time + ( (-1 + Math.sign(aAsinX)) * (-Math.sign(aAsinZ) ) * (Math.PI * 0.25) ) );
	let a2cos = Math.cos(aAsinZ + time + ( (-1 + Math.sign(aAsinX)) * (-Math.sign(aAsinZ) ) * (Math.PI * 0.25) ) );
	a[0] = a2cos * aa;
	a[2] = a2sin * aa;
	let b2sin = Math.sin(bAsinZ + time + ( (-1 + Math.sign(bAsinX)) * (-Math.sign(bAsinZ) ) * (Math.PI * 0.25) ) );
	let b2cos = Math.cos(bAsinZ + time + ( (-1 + Math.sign(bAsinX)) * (-Math.sign(bAsinZ) ) * (Math.PI * 0.25) ) );
	b[0] = b2cos * aa;
	b[2] = b2sin * aa;
	let c2sin = Math.sin(cAsinZ + time + ( (-1 + Math.sign(cAsinX)) * (-Math.sign(cAsinZ) ) * (Math.PI * 0.25) ) );
	let c2cos = Math.cos(cAsinZ + time + ( (-1 + Math.sign(cAsinX)) * (-Math.sign(cAsinZ) ) * (Math.PI * 0.25) ) );
	c[0] = c2cos * aa;
	c[2] = c2sin * aa;
	let d2sin = Math.sin(dAsinZ + time + ( (-1 + Math.sign(dAsinX)) * (-Math.sign(dAsinZ) ) * (Math.PI * 0.25) ) );
	let d2cos = Math.cos(dAsinZ + time + ( (-1 + Math.sign(dAsinX)) * (-Math.sign(dAsinZ) ) * (Math.PI * 0.25) ) );
	d[0] = d2cos * aa;
	d[2] = d2sin * aa;
	let e2sin = Math.sin(eAsinZ + time + ( (-1 + Math.sign(eAsinX)) * (-Math.sign(eAsinZ) ) * (Math.PI * 0.25) ) );
	let e2cos = Math.cos(eAsinZ + time + ( (-1 + Math.sign(eAsinX)) * (-Math.sign(eAsinZ) ) * (Math.PI * 0.25) ) );
	e[0] = e2cos * aa;
	e[2] = e2sin * aa;
	let f2sin = Math.sin(fAsinZ + time + ( (-1 + Math.sign(fAsinX)) * (-Math.sign(fAsinZ) ) * (Math.PI * 0.25) ) );
	let f2cos = Math.cos(fAsinZ + time + ( (-1 + Math.sign(fAsinX)) * (-Math.sign(fAsinZ) ) * (Math.PI * 0.25) ) );
	f[0] = f2cos * aa;
	f[2] = f2sin * aa;
	let g2sin = Math.sin(gAsinZ + time + ( (-1 + Math.sign(gAsinX)) * (-Math.sign(gAsinZ) ) * (Math.PI * 0.25) ) );
	let g2cos = Math.cos(gAsinZ + time + ( (-1 + Math.sign(gAsinX)) * (-Math.sign(gAsinZ) ) * (Math.PI * 0.25) ) );
	g[0] = g2cos * aa;
	g[2] = g2sin * aa;
	let h2sin = Math.sin(hAsinZ + time + ( (-1 + Math.sign(hAsinX)) * (-Math.sign(hAsinZ) ) * (Math.PI * 0.25) ) );
	let h2cos = Math.cos(hAsinZ + time + ( (-1 + Math.sign(hAsinX)) * (-Math.sign(hAsinZ) ) * (Math.PI * 0.25) ) );
	h[0] = h2cos * aa;
	h[2] = h2sin * aa;
	time += 0.2;

	

}

setInterval (() => rotateCube(), 100);




let camera = 400;
function draw(){
	ctx.translate(W/2, H/2);
	ctx.fillStyle = "white";
	ctx.fillRect(-W, -H, W*2, H*2);


	ctx.strokeStyle = "blue";
	ctx.beginPath();
	ctx.moveTo((a[0]*camera / (a[2]+camera)), (a[1]*camera / (a[2]+camera)));
	ctx.lineTo((a[0]*camera / (a[2]+camera)), (a[1]*camera / (a[2]+camera)));
	ctx.lineTo((b[0]*camera / (b[2]+camera)), (b[1]*camera / (b[2]+camera)));
	ctx.lineTo((b[0]*camera / (b[2]+camera)), (b[1]*camera / (b[2]+camera)));
	ctx.lineTo((c[0]*camera / (c[2]+camera)), (c[1]*camera / (c[2]+camera)));
	ctx.lineTo((d[0]*camera / (d[2]+camera)), (d[1]*camera / (d[2]+camera)));
	ctx.lineTo((a[0]*camera / (a[2]+camera)), (a[1]*camera / (a[2]+camera)));
	ctx.lineTo((e[0]*camera / (e[2]+camera)), (e[1]*camera / (e[2]+camera)));
	ctx.lineTo((f[0]*camera / (f[2]+camera)), (f[1]*camera / (f[2]+camera)));
	ctx.lineTo((b[0]*camera / (b[2]+camera)), (b[1]*camera / (b[2]+camera)));
	ctx.moveTo((f[0]*camera / (f[2]+camera)), (f[1]*camera / (f[2]+camera)));
	ctx.lineTo((g[0]*camera / (g[2]+camera)), (g[1]*camera / (g[2]+camera)));
	ctx.lineTo((g[0]*camera / (g[2]+camera)), (g[1]*camera / (g[2]+camera)));
	ctx.lineTo((c[0]*camera / (c[2]+camera)), (c[1]*camera / (c[2]+camera)));
	ctx.moveTo((g[0]*camera / (g[2]+camera)), (g[1]*camera / (g[2]+camera)));
	ctx.lineTo((h[0]*camera / (h[2]+camera)), (h[1]*camera / (h[2]+camera)));
	ctx.lineTo((h[0]*camera / (h[2]+camera)), (h[1]*camera / (h[2]+camera)));
	ctx.lineTo((d[0]*camera / (d[2]+camera)), (d[1]*camera / (d[2]+camera)));
	ctx.moveTo((h[0]*camera / (h[2]+camera)), (h[1]*camera / (h[2]+camera)));
	ctx.lineTo((e[0]*camera / (e[2]+camera)), (e[1]*camera / (e[2]+camera)));
	ctx.stroke();


	ctx.translate(-W/2, -H/2);
	requestAnimationFrame(draw);
}


setTimeout (draw, 1000)
