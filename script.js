let n=0;let p=0;
var intA=setInterval(()=>{
if(n==0){
    $('#inpName').val('I|').css('color', 'gray')
}
if(n==1){
    $('#inpName').val('In').css('color', 'gray')
}
if(n==2){
    $('#inpName').val('Inp|').css('color', 'gray')
}
if(n==3){
    $('#inpName').val('Inpu').css('color', 'gray')
}
if(n==4){
    $('#inpName').val('Input|').css('color', 'gray')
}
if(n==5){
    $('#inpName').val('Input ').css('color', 'gray')
}
if(n==6){
    $('#inpName').val('Input Y|').css('color', 'gray')
}
if(n==7){
    $('#inpName').val('Input Yo').css('color', 'gray')
}
if(n==8){
    $('#inpName').val('Input You|').css('color', 'gray')
}
if(n==9){
    $('#inpName').val('Input Your').css('color', 'gray')
}
if(n==10){
    $('#inpName').val('Input Your |').css('color', 'gray')
}
if(n==11){
    $('#inpName').val('Input Your N').css('color', 'gray')
}
if(n==12){
    $('#inpName').val('Input Your Na|').css('color', 'gray')
}
if(n==13){
    $('#inpName').val('Input Your Nam').css('color', 'gray')
}
if(n==14){
    $('#inpName').val('Input Your Name|').css('color', 'gray')
}
if(n==15){
    $('#inpName').val('Input Your Name').css('color', 'gray')
}
if(n==15){
    n=13
}
n++
},140)
var intB=setInterval(()=>{
    if(p==0){
        $('#inpPass').val('I|').css('color', 'gray')
    }
    if(p==1){
        $('#inpPass').val('In').css('color', 'gray')
    }
    if(p==2){
        $('#inpPass').val('Inp|').css('color', 'gray')
    }
    if(p==3){
        $('#inpPass').val('Inpu').css('color', 'gray')
    }
    if(p==4){
        $('#inpPass').val('Input|').css('color', 'gray')
    }
    if(p==5){
        $('#inpPass').val('Input |').css('color', 'gray')
    }
    if(p==6){
        $('#inpPass').val('Input Y|').css('color', 'gray')
    }
    if(p==7){
        $('#inpPass').val('Input Yo').css('color', 'gray')
    }
    if(p==8){
        $('#inpPass').val('Input You|').css('color', 'gray')
    }
    if(p==9){
        $('#inpPass').val('Input Your').css('color', 'gray')
    }
    if(p==10){
        $('#inpPass').val('Input Your |').css('color', 'gray')
    }
    if(p==11){
        $('#inpPass').val('Input Your P').css('color', 'gray')
    }
    if(p==12){
        $('#inpPass').val('Input Your Pa|').css('color', 'gray')
    }
    if(p==13){
        $('#inpPass').val('Input Your Pas').css('color', 'gray')
    }
    if(p==14){
        $('#inpPass').val('Input Your Pass|').css('color', 'gray')
    }
    if(p==15){
        $('#inpPass').val('Input Your Passw').css('color', 'gray')
    }
    if(p==16){
        $('#inpPass').val('Input Your Passwo|').css('color', 'gray')
    }
    if(p==17){
        $('#inpPass').val('Input Your Passwor').css('color', 'gray')
    }
    if(p==18){
        $('#inpPass').val('Input Your Password|').css('color', 'gray')
    }
    if(p==19){
        $('#inpPass').val('Input Your Password').css('color', 'gray')
    }
    if(p==19){
        p=17
    }
    p++
},140)
$('#inpName').click(()=>{
    clearInterval(intA)
    $('#title').text('(Input Name)')
    $('#inpName').val('').css('color', 'black')
})
$('#inpPass').click(()=>{
    setInterval(intA)
    clearInterval(intB)
    if($('#inpName').val()==''){
        $('#inpName').val('Input Your Name...').css('color','red')
    }
    $('#title').text('(Input Password)')
    $('#inpPass').val('').css('color', 'black')
})
var yName=Math.random()
var yPass=Math.random()
console.log(yName)
$('#signIn').click(()=>{
    yName=prompt("Your Name")
    yPass=prompt("Your Password")
    alert(yName + " " + yPass)
})
$('#btn').click(()=>{
    if(($('#inpName').val()==yName) && ($('#inpPass').val()==yPass) && (isNaN(yName)) && (isNaN(yName))){
      $('#mainDiv').html(`<img src='images/habib.jpg' height='200' width='200' style='margin-left: 40px'>
     <p style='text-align:center'>_Developer:Habibur Rahman<br>(Habib)</p>`).css('border','0px');
      alert('WELCOME')
    }else{
        alert('"Sign In" & Input Correct Informations...')
    }
})

