addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('input')[1].disabled = true;
    document.getElementsByTagName('input')[1].style.cursor = 'default';
    document.getElementById('file').onchange = function loadFile(event) {
        this.disabled = true;
        document.getElementsByTagName('input')[1].disabled = false;
        document.getElementsByTagName('input')[1].style.cursor = 'pointer';
        document.getElementsByTagName('form')[0].onsubmit = () => {
            let width = document.createElement('input');
            width.placeholder = 'Width in pixels';
            width.type = 'number';
            width.min = '0';
            width.max = '1000'
            width.step = '10';
            width.autofocus = true;
            width.style.marginTop = '50px';
            width.style.outline = 'none';
            width.style.position = 'fixed'
            width.style.fontSize = '40px';
            width.style.width = '275px';
            width.style.marginLeft = '60%'
            document.body.appendChild(width);
            let next = document.createElement('button');
            next.id = 'but'
            next.innerHTML = 'Next'
            next.style.marginLeft = '60%';
            next.style.marginTop = '140px';
            next.style.fontSize = '35px';
            next.style.position = 'fixed'
            next.style.paddingLeft = '25px';
            next.style.paddingRight = '25px';
            document.body.appendChild(next);
            next.disabled = true;
            let pass = document.createElement('br');
            document.body.appendChild(pass)
            let img = document.createElement('img');
            img.src = URL.createObjectURL(event.target.files[0]);
            img.style.width = '200px';
            img.style.marginTop = '30px';
            document.body.appendChild(img);
            document.getElementsByTagName('input')[1].disabled = true;
            document.getElementsByTagName('input')[1].style.cursor = 'default';
            width.onchange = () => {
                let wpix = width.value + 'px'
                img.style.width = wpix;
                if (width.value == '') {
                    img.style.width = '200px'
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else if (width.value > 1000) {
                    alert('Entered value must be less than or equal to 1000!');
                    img.style.width = '200px';
                    width.value = '';
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (width.value == 0) {
                    next.disabled = true;
                    next.style.cursor = 'default';
                }
            }
            width.onkeyup = () => {
                let wpix = width.value + 'px'
                img.style.width = wpix;
                if (width.value == '') {
                    img.style.width = '200px'
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else if (width.value > 1000) {
                    alert('Entered value must be less than or equal to 1000!');
                    img.style.width = '200px';
                    width.value = '';
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (width.value == 0) {
                    next.disabled = true;
                    next.style.cursor = 'default';
                }
            }
            next.onclick = () => {
                document.getElementsByTagName('form')[0].innerHTML = ''
                next.style.display = 'none';
                width.style.display = 'none';
                document.getElementsByTagName('body')[0].style.width = '100%';
                document.body.appendChild(pass)
                let print = document.createElement('button');
                print.innerHTML = 'Print';
                print.style.fontSize = '35px';
                print.style.paddingLeft = '35px';
                print.style.paddingRight = '35px';
                print.style.marginLeft = '90%';
                print.style.marginTop = '30px';
                print.style.cursor = 'pointer';
                print.style.position = 'fixed';
                document.body.appendChild(print);
                print.onclick = () => {
                    print.style.display = 'none'
                    window.print();
                    let newPrint = document.createElement('button');
                    newPrint.innerHTML = 'Upload a new photo';
                    newPrint.style.fontSize = '35px';
                    newPrint.style.paddingLeft = '30px';
                    newPrint.style.paddingRight = '30px';
                    newPrint.style.height = '60px'
                    newPrint.style.marginLeft = '75%';
                    newPrint.style.marginTop = '30px';
                    newPrint.style.cursor = 'pointer';
                    newPrint.style.position = 'fixed';
                    document.body.appendChild(newPrint)
                    newPrint.onclick = () => {
                        window.location.reload();
                    }
                }
            }
            onkeypress = (key) => {
                if (key.code == 'Enter' && next.disabled == false) {
                    document.getElementsByTagName('form')[0].innerHTML = ''
                    next.style.display = 'none';
                    width.style.display = 'none';
                    document.getElementsByTagName('body')[0].style.width = '100%';
                    document.body.appendChild(pass)
                    let print = document.createElement('button');
                    print.innerHTML = 'Print';
                    print.style.fontSize = '35px';
                    print.style.paddingLeft = '35px';
                    print.style.paddingRight = '35px';
                    print.style.marginLeft = '90%';
                    print.style.marginTop = '30px';
                    print.style.cursor = 'pointer';
                    print.style.position = 'fixed';
                    document.body.appendChild(print);
                    print.onclick = () => {
                        print.style.display = 'none'
                        window.print();
                        let newPrint = document.createElement('button');
                        newPrint.innerHTML = 'Upload a new photo';
                        newPrint.style.fontSize = '35px';
                        newPrint.style.paddingLeft = '30px';
                        newPrint.style.paddingRight = '30px';
                        newPrint.style.height = '60px'
                        newPrint.style.marginLeft = '75%';
                        newPrint.style.marginTop = '30px';
                        newPrint.style.cursor = 'pointer';
                        newPrint.style.position = 'fixed';
                        document.body.appendChild(newPrint)
                        newPrint.onclick = () => {
                            window.location.reload();
                        }
                    }
                }
            }
            return false;
        };  
    }  
})

