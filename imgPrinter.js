addEventListener('DOMContentLoaded', () => {
    let icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = 'icon.jpg';
    document.head.append(icon);
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
            width.max = '1000';
            width.step = '10';
            width.autofocus = true;
            width.style.marginTop = '50px';
            width.style.outline = 'none';
            width.style.position = 'fixed'
            width.style.fontSize = '40px';
            width.style.width = '285px';
            width.style.marginLeft = '75%'
            document.body.appendChild(width);
            let height = document.createElement('input');
            height.placeholder = 'Height in pixels';
            height.type = 'number';
            height.min = '0';
            height.max = '1000'
            height.step = '10';
            height.autofocus = true;
            height.style.marginTop = '140px';
            height.style.outline = 'none';
            height.style.position = 'fixed'
            height.style.fontSize = '40px';
            height.style.width = '285px';
            height.style.marginLeft = '75%'
            document.body.appendChild(height)
            let next = document.createElement('button');
            next.id = 'but'
            next.innerHTML = 'Next'
            next.style.marginLeft = '75%';
            next.style.marginTop = '230px';
            next.style.fontSize = '35px';
            next.style.position = 'fixed'
            next.style.paddingLeft = '25px';
            next.style.paddingRight = '25px';
            next.style.cursor = 'pointer';
            document.body.appendChild(next);
            let pass = document.createElement('br');
            document.body.appendChild(pass)
            let img = document.createElement('img');
            img.src = URL.createObjectURL(event.target.files[0]);
            img.style.width = '500px';
            img.style.marginTop = '30px';
            document.body.appendChild(img);
            document.getElementsByTagName('input')[1].disabled = true;
            document.getElementsByTagName('input')[1].style.cursor = 'default';
            width.onchange = () => {
                let wpix = width.value + 'px';
                let hpix = height.value + 'px';
                img.style.width = wpix;
                if (width.value == 0) {
                    width.value = '';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (width.value == '' && height.value == '') {
                    img.style.width = '500px';
                    img.style.height = 'auto';
                } else if (width.value == '' && height.value != '') {
                    img.style.height = hpix;
                    img.style.width = 'auto';
                }
            }
            width.onkeyup = () => {
                let wpix = width.value + 'px';
                let hpix = height.value + 'px';
                img.style.width = wpix;
                if (width.value == 0) {
                    width.value = '';
                } else if (width.value > 1000) {
                    alert('Entered value must be less than or equal to 1000!');
                    width.value = '';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (width.value == '' && height.value == '') {
                    img.style.width = '500px';
                    img.style.height = 'auto';
                } else if (width.value == '' && height.value != '') {
                    img.style.height = hpix;
                    img.style.width = 'auto';
                }
            }
            height.onchange = () => {
                let hpix = height.value + 'px';
                let wpix = width.value + 'px'
                img.style.height = hpix;
                if (height.value == 0) {
                    height.value = '';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (height.value == '' && width.value == '') {
                    img.style.width = '500px';
                    img.style.height = 'auto';
                } else if (height.value != '' && width.value == '') {
                    img.style.height = hpix;
                    img.style.width = 'auto';
                } else if (height.value == '' && width.value != '') {
                    img.style.width = wpix;
                    img.style.height = 'auto';
                }
            }
            height.onkeyup = () => {
                let hpix = height.value + 'px';
                let wpix = width.value + 'px'
                img.style.height = hpix;
                if (height.value == 0) {
                    height.value = '';
                } else {
                    next.disabled = false;
                    next.style.cursor = 'pointer';
                }
                if (height.value == '' && width.value == '') {
                    img.style.width = '500px';
                    img.style.height = 'auto';
                } else if (height.value != '' && width.value == '') {
                    img.style.height = hpix;
                    img.style.width = 'auto';
                } else if (height.value == '' && width.value != '') {
                    img.style.width = wpix;
                    img.style.height = 'auto';
                }
            }
            next.onclick = () => {
                document.getElementsByTagName('form')[0].innerHTML = '';
                next.disabled = true;
                next.style.display = 'none';
                width.style.display = 'none';
                height.style.display = 'none';
                img.src = '';
                document.body.appendChild(img)
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
                img.src = URL.createObjectURL(event.target.files[0]);
                document.body.appendChild(img)
                print.onclick = () => {
                    print.style.display = 'none'
                    window.print();
                    img.src = ''
                    document.body.appendChild(img)
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
                    img.src = URL.createObjectURL(event.target.files[0]);
                    document.body.appendChild(img)
                    newPrint.onclick = () => {
                        window.location.reload();
                    }
                }
            }
            onkeypress = (key) => {
                if (key.code == 'Enter' && next.disabled == false && next.style.display != 'none') {
                    document.getElementsByTagName('form')[0].innerHTML = '';
                    next.style.display = 'none';
                    width.style.display = 'none';
                    height.style.display = 'none';
                    img.src = ''
                    document.body.appendChild(img)
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
                    img.src = URL.createObjectURL(event.target.files[0]);
                    document.body.appendChild(img);
                    print.onclick = () => {
                        print.style.display = 'none'
                        window.print();
                        img.src = ''
                        document.body.appendChild(img)
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
                        img.src = URL.createObjectURL(event.target.files[0]);
                        document.body.appendChild(img)
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

