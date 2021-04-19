let sagnebi=['matematika', 'qartuli','fizika','istoria'];


let students=[
    {
    saxeli:'giorgi',
    gvari:'arabuli',
    qula:[65,66,79,30]
},
{
    saxeli:'mamuka',
    gvari:'jikia',
    qula:[56,76,87,34]
},
{
    saxeli:'manana',
    gvari:'ratia',
    qula:[56,87,34,98]
},
{
    saxeli:'gela',
    gvari:'tushishvili',
    qula:[54,65,78,97]
}

];
let cvladi='';
//gamovtvalo sashualo
cvladi =[0,0,0,0];
for(let i=0; i<students.length; i++){
    for(let u=0; u<students[i].qula.length; u++){
        cvladi[u]+=students[i].qula[u];
    }
}
for(let i=0; i<cvladi.length; i++){
    cvladi[i]/=students.length;
}



//cvladebi
let conteiner=document.getElementById('conteiner');
let trt = document.querySelector('#conteiner thead tr');
let body=document.querySelector('#conteiner tbody');

let cvladi1='<th>saxeli</th><th>gvari</th>';

//shevitano html failis th shi chveni sagnebis saxelebi js idan

for(let i=0;i<sagnebi.length;i++){
cvladi1+=`<th>${sagnebi[i]}</th>`;
}
trt.innerHTML=trt.innerHTML+cvladi1;

//shevitano bodys tr shi da tr dan td shi is kulebi rac moswavleebma miiges









//axla gavaketo axali tr sadac td shi shevitan sashualoebs 

cvladi1='';
for(let i=0;i<students.length;i++){
    cvladi1+=`<tr>
    <td>${students[i].saxeli}</td>
    <td>${students[i].gvari}</td>
    <td class="${cvladi[0] > students[i].qula[0] ? 'red' : 'green'}">${students[i].qula[0]}</td>
    <td class="${cvladi[1] > students[i].qula[1] ? 'red' : 'green'}">${students[i].qula[1]}</td>
    <td class="${cvladi[2] > students[i].qula[2] ? 'red' : 'green'}">${students[i].qula[2]}</td>
    <td class="${cvladi[3] > students[i].qula[3] ? 'red' : 'green'}">${students[i].qula[3]}</td>
    </tr>`;
}
body.innerHTML=cvladi1+body.innerHTML;

let cvladi2= '<tr>'+
`<td colspan="2">sashualo</td>'
<td>kula</td>`;
for( let i=0;i<cvladi.length;i++){
    cvladi2+=`<td>${cvladi[i]}</td>`;
}
cvladi2=cvladi2+ `</tr>`;
body.innerHTML+=cvladi2;

/*let gvar=document.getElementById('gvar').value;
let math=document.getElementById('math').value;
let saxe=document.getElementById('saxe');
let kart=document.getElementById('kart').value;
let fiz=document.getElementById('fiz').value;
let ist=document.getElementById('ist').value;
let butto=document.querySelector('#inp button');
*/
//shemomakvs cvladi da vaketeb funqcias rom daematos studenti


document.getElementById('inp').addEventListener('submit', daamate);

function daamate(x){
    x.preventDefault();
    let inpinp=document.querySelectorAll('#inp input');
    let axalistudenti = {
        saxeli: '',
        gvari: '',
        qula: []
    };
    console.log(inpinp);
for(let i=0;i<inpinp.length;i++){
    if(inpinp[i].name === 'saxe'){
        axalistudenti.saxeli=inpinp[i].value;
    }else if(
        inpinp[i].name==='gvar'){
            axalistudenti.gvari=inpinp[i].value
        }else{
            axalistudenti.qula.push(inpinp[i].value);
        }

    }
    students.push(axalistudenti);
    console.log('inpinp');
   
};
