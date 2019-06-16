
this.date = new Date();
this.month = date.getMonth();
this.year = date.getFullYear();
this.today= date.getDate();

// Year(this.year);
function MonthAct(globalThis=month) {
    let mes = Months(this.month);
    GetDays(month, year);
     Year();
     // console.log(mes)
    return document.getElementById('mes').innerHTML=mes;
}
function Months(dados) { 
    let months_year = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro") ;  
    return months_year[dados]; 
}
function Next(globalThis=month) {
    let val = month+1;
    let result = Months(val);
    if (val==11) {
        this.month=-1;
        globalThis=year=year+1;
    } else {
        globalThis=month=val;  
    }
    Year();
    GetDays(val, year);
    document.getElementById("mes").textContent= result;
}

function Prev(globalThis=month) {
    let val;
     if (month==-1) {globalThis=month=11;}
     if (month==0) {globalThis=month=12;}
    val = month-1;
    // console.log("valor", val);
    let result = Months(val);

    if (val==0) {
        globalThis=month=12;
        globalThis=year=year-1;
    } else {
        globalThis=month=val;  
    }
    Year();
     GetDays(val, year);
    document.getElementById("mes").textContent= result;
}
function Tec(key) {
   if (key == 37) {
    Prev();
} else if (key == 39) {
    Next();
}
   
    // if (key == KEY_LEFT) {
    //     console.log("sucesso");
    // } else {
    //     console.log("deu ruim");
    // }
}

function GetDays(month, year) {
     const  elemento = document.getElementById("calendar"); 
     elemento.textContent="";
    var date = new Date(year, month, 1);
    var days_month = [];
    while (date.getMonth() === month) {
       days_month.push(date.getDate());
       date.setDate(date.getDate() + 1);
      
    }
     for (var i = DayWeek(); i >= 0; i--) {

         elemento.innerHTML+=`<div class="days_pass">${DayPass(this.month-1)-(i)}</div>`;
         // console.log(DayPass(this.month-1)-(i-1))
        }
        var size = days_month.length;
        var i = 0;
        while(size>i){
            if (days_month[i] === today) {
                elemento.innerHTML+=`<div class="days_data today">${days_month[i]}</div>`;
            } else {
                elemento.innerHTML+=`<div class="days_data">${days_month[i]}</div>`;
            }

            i++;
        }
    
}
function Year(globalThis=year) {
   document.getElementById('year').textContent=year.toString();
}
function DayPass (month){
        var day;

    if (month===0 || month===2 ||month===4 || month===6 || month===7 || month===9 || month===11) {
        day = 31
        return day;
    } else if(month===3 || month===5 || month===8 || month===10){
        day = 30;
          return day;
    }else{
        if ( ( year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0) ) { 

            // console.log(year + ' é bissexto'); 
            day = 29;

        } else {

            // console.log(year + ' não é bissexto');
            day = 28;
        }
        
        return day;
    }
   
}

function DayWeek(){
    var inicio = new Date(this.year, this.month, 1);
    return inicio.getDay() - 1 === -1 ? 6 : inicio.getDay()-1;
}