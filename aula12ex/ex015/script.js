function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'imagens/bebem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultom.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'imagens/bebef.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemf.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imagens/adultof.png')
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosof.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }
}