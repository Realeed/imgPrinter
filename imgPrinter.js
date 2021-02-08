addEventListener('DOMContentLoaded', () => {
    document.getElementsByTagName('input')[1].disabled = true;
    document.getElementsByTagName('input')[1].style.cursor = 'default';
    document.getElementById('file').onchange = function loadFile(event) {
        this.disabled = true;
        document.getElementsByTagName('input')[1].disabled = false;
        document.getElementsByTagName('input')[1].style.cursor = 'pointer';
        document.getElementsByTagName('form')[0].onsubmit = () => {
            let img = document.createElement('img');
            img.src = URL.createObjectURL(event.target.files[0]);
            img.style.width = '100px';
            img.style.marginTop = '30px';
            document.body.appendChild(img);
            document.getElementsByTagName('input')[1].disabled = true;
            document.getElementsByTagName('input')[1].style.cursor = 'default';
            let width = document.createElement('input');
            width.placeholder = 'Enter the width you want to print in \'px\'';
            width.style.marginTop = '50px';
            width.style.outline = 'none';
            width.style.position = 'fixed'
            width.style.fontSize = '40px';
            width.style.width = '690px';
            width.style.marginLeft = '30px'
            document.body.appendChild(width)
            width.onkeyup = () => {
                width.style.width = '120px'
                let wpix = width.value + 'px'
                img.style.width = wpix;
                if (width.value == '') {
                    img.style.width = '100px'
                    width.style.width = '690px';
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else if (width.value > 1000) {
                    alert('Entered value must be less than or equal to 1000!');
                    img.style.width = '100px';
                    width.value = '';
                    width.style.width = '690px';
                    next.disabled = true;
                    next.style.cursor = 'default';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
            }
            let next = document.createElement('button');
            next.id = 'but'
            next.innerHTML = 'Next'
            next.style.marginLeft = '30px';
            next.style.marginTop = '140px';
            next.style.fontSize = '35px';
            next.style.position = 'fixed'
            next.style.paddingLeft = '25px';
            next.style.paddingRight = '25px';
            document.body.appendChild(next);
            next.disabled = true;
            next.onclick = () => {
                document.getElementsByTagName('form')[0].innerHTML = ''
                next.style.display = 'none';
                width.style.display = 'none';
                document.getElementsByTagName('body')[0].style.width = '100%';
                let print = document.createElement('button');
                print.innerHTML = 'Print';
                print.style.fontSize = '35px';
                print.style.paddingLeft = '35px';
                print.style.paddingRight = '35px';
                print.style.marginLeft = '80px';
                print.style.marginTop = '50px';
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
                    newPrint.style.height = '70px'
                    newPrint.style.marginLeft = '80px';
                    newPrint.style.marginTop = '50px';
                    newPrint.style.cursor = 'pointer';
                    newPrint.style.position = 'fixed';
                    document.body.appendChild(newPrint)
                    newPrint.onclick = () => {
                        window.location.reload();
                    }

                }

            }
            return false;
        };
    
    }
    
})

