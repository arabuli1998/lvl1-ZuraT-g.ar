
class tab{
    _header=[];
    tableid=[];
    constructor(id,header){
        this.tableid=id;
        this.header=header;
        return this;
    }
    adrow(data,clases){
        let tbody=document.querySelector(`#${this.tableid} tbody`);
        let cvladi=`<tr>`;
        for(let j=0;j<data.length;j++){
            cvladi+=`<td class="${clases}">${data[j]}</td>`
        }
        cvladi+=`<tr>`;
        tbody.innerHTML+=cvladi;
        return this;
    }

    //mivcet gasuftaveba, sicariele
    cbody(){
        document.querySelector(`#${this.tableid}tbody`).innerHTML='';
    }
    ghead(){
        let thead=document.querySelector(`#${this.tableid}thead tr`);
        let cvladi='';
        for(var i=0;i<this.header.length;i++){
            cvladi+=`<td>${this.header[i]}<td>`;
        }
        thead.innerHTML=cvladi;
    }
    gfoot(){
        console.log(gene);
    }
    get header(){
        return this._header;
    }
    set header(value){
this._header=value;
this.ghead();
return this;
    }
}



class mtavari extends tab{
    sagnebi=[];
    studentebi=[];
    sashualo=[];
    constructor(studentebi,sagnebi){
       
        let header=["saxeli","gvari"];
        super('conteiner',[...header, ...sagnebi]);
        this.studentebi=studentebi;
        this.sagnebi=sagnebi;
        this.butto();
        this.gsashualo();
        this.gtable();
    }
    gtable(){
        this.sashualo();
        this.gfoot();
        for(let i=0;i<this.studentebi.length;i++){
    this.adrow([studentebi[i].saxeli,studentebi[i].gvari, ...studentebi[i].qula]);
        }
    }
    butto(){
        document.getElementById("#inputs").addEventListener("submit",this.addstudent.bind(this));
    }
    gfoot(){
        
        let cvladi=`<tfoot>`+`<tr>`+
        `<td>sashualo</td>`;
        for(let i=0;i<this.sashualo.length;i++){
            cvladi+=`<td>${this.sashualo[i]}</td>`;
        }
        cvladi+=`</tr>`+`</tfoot>`;
        document.querySelector('#conteiner tfoot').innerHTML=cvladi;
    }
    gsashualo(){
        for(let i=0;i<this.studentebi.length;i++){
            for(let j=0;j<this.studentebi[i].qula.length;j++){
                this.sashualo[i]=this.sashualo[j] ? this.sashualo[j]+this.studentebi[i].qula[j] : this.studentebi[i].qula[j];
            }
           

        }
        for(let i=0;i<this.sashualo.length;i++){
            this.sashualo[i]/=this.studentebi.length;
        }

    }

studenti(e){
    e.preventdefault();
    let follow=document.querySelectorAll('#inputs input');
    let axstudenti={
        saxeli:'',
        gvari:'',
        qula:[]
    };
    for(let i=0;i<follow.length;i++){
        if(follow[i].name==='saxeli'){
            axstudenti.saxeli=follow[i].value;
        }else if(follow[i].name==='gvari'){
            axstudenti.gvari=follow[i].value;
        }else{
            axstudenti.qula.push(parseInt(follow[i].value)? parseInt(follow[i].value):0)
        }
    }
    this.students.push(axstudenti);
    this.drow(axstudenti);
    this.gsashualo();
    return true;
}
sagani(saxeli,qula){
    this.sagnebi.push(saxeli);
    this.header=[...this.header.name];
    let cvladi=qula.split(',');
    for(let i=0;i<cvladi.length;i++){
        if(this.studentebi[i]){
            this.studentebi[i].qula.push(Number(cvladi[i]));
        }
    }
    this.cbody();
    this.gtable();
}
}
let sagnebi=['matematika','qartuli','fizika','istoria'];
let studentebi=[{
    saxeli:'gio',
    gvari:'arab',
    qula:[55,77,87,66]
},
{
    saxeli:'gio',
    gvari:'arab',
    qula:[55,77,87,66]
},
{
    saxeli:'gio',
    gvari:'arab',
    qula:[55,77,87,66]
},
];
/*                                                                   akamde ki gavige ase tuiise magram amis mnishvnelobas ver vcbdebi. tan zemot eror ver movashore veranairad//
let mtavari2=new mtavari(sagnebi,studentebi);
document.getElementById("#inputs").addEventListener("submit",function(e){
    e.preventDefault;
    let saxeli=document.querySelector('inputs input[name="name"]').value;
    let qula=document.querySelector('#inputs input[name="qula"]').value
})