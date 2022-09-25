
    function fu1(num) {
        const input = document.getElementById('input-1').value
        document.getElementById("input-1").value = input + num
    }

    function calculos() {
        const input = document.getElementById('input-1').value
        document.getElementById('input-1').value = eval(input)
    }
    function clearinput() {
        document.getElementById('input-1').value = ''
    }

    function invertvalue() {
        calculos()

        const input = document.getElementById('input-1').value
        document.getElementById('input-1').value = input * -1
    }

    function divisao(){
   const input = document.getElementById("input-1").value
   document.getElementById("input-1").value =parseInt(num1) / parseInt(num2)
   
    }