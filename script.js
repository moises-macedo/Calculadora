function Calculadora() {
    this.display = document.querySelector(".display");
    this.capturaClick = () => {
        document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.classList.contains("btn-num")) {
                this.addNumDisplay(el)
            }
            if (el.classList.contains("btn-clear")) {
                this.clear()
            }
            if (el.classList.contains("btn-del")) {
                this.del()
            }
            if (el.classList.contains("btn-eq")) {
                this.realizaConta(el)
            }
        })
    }
    this.clear = () => {
        this.display.value = ""
    }

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.realizaConta = () => {
        try {
            const valor = eval(this.display.value)

            if (valor === String) {
                alert("conta invalida")
                return
            }

            this.display.value = valor
        }
        catch (e) {
            this.clear();
            alert("conta invalida")
            return

        }

    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus()

    };

    this.capturaEnter= ()=>{
        this.display.addEventListener("keyup", (e)=>{
            if(e.keyCode === 13){
                this.realizaConta()
            }
            if(e.keyCode === 46 || e.keyCode === 27){
                this.clear()
            }

        })
    }

    this.inicia = () => {
        this.capturaClick();
        this.capturaEnter();

    }

}

const calculadora = new Calculadora();
calculadora.inicia();