document.addEventListener('DOMContentLoaded', function() {
    const b1 = document.querySelector('#b1')
    const b2 = document.querySelector('#b2')
    const b3 = document.querySelector('#b3')
    const b4 = document.querySelector('#b4')
    const b5 = document.querySelector('#b5')
    const b6 = document.querySelector('#b6')
    const body = document.querySelector('body')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const arrow = document.querySelector('#arrow')
    arrow.style.display = 'none';
    b1.style.display = 'block';
    //Click here button
    b1.onclick = () => {
        
        document.querySelector('#greeting').style.display = 'none';
        document.querySelector('#beg').style.display = 'none';
        
        b1.style.display = 'none';
        p1.innerHTML = 'Lets begin with the defintion of <em>volleyball</em>';
        p1.setAttribute('id', 'b1info')
        document.querySelector('body').append(p1)
        setTimeout(function(){b2.style.display = 'block'}, 2000)
        setTimeout(function(){arrow.style.display='block'} , 2000)
       
        body.style.backgroundImage = 'url("https://goredbirds.com/images/2022/11/11/volleyball_stock_r21tU.jpg")'
    }
    // Show definition button
    b2.onclick = () => {
        b2.style.display = 'none';
       
        
        
        p1.style.display = 'none';
        p2.innerHTML = 
        'According to Wikipedia <em>Article 7 - Section I dont know</em>, Professional volleyball is a team sport where two teams of six players are separated by a net. <br> And according to <em>QuoraDemo.io, Section 3 - Article I dont care</em>, They say (and I quote) "Professional Volleyball is a team sport where there are six players in both sides of the net" '
        p2.setAttribute('id', 'b2info')
        body.append(p2)
        
        setTimeout(function(){b3.style.display = 'block'}, 7000)
        setTimeout(function(){arrow.style.display='block'} , 2000)
        body.style.backgroundImage = 'url("https://static.vecteezy.com/system/resources/previews/003/588/188/non_2x/volleyball-sport-low-poly-wireframe-mesh-design-illustration-free-vector.jpg")'
       
    }
    
    // Definiton of sport button
    b3.onclick = () => {
        b3.style.display = 'none';
        p2.style.display = 'none';
        p3.innerHTML = 'Now lets look at the definiton of a Sport:';
        p3.setAttribute('id', 'b3info')
        body.append(p3)
        body.style.backgroundImage = 'url("https://st.depositphotos.com/1063346/1340/i/450/depositphotos_13409056-stock-photo-assorted-sports-equipment-on-black.jpg")'
        setTimeout(function(){b4.style.display = 'block'}, 2000)
        setTimeout(function(){arrow.style.display='block'} , 2000)
       
    }

    // Show Definiton button
    b4.onclick = () => {
        b4.style.display = 'none';
        p3.style.display = 'none';
        p4.innerHTML = 'According To clearinghouseforsport.gov.au, <em>Section 20, Article - It doesnt mattter</em>, <br> A sport is an activity involving physical exertion, skill and/or hand-eye coordination as the primary focus of the activity, <br> with elements of competition where rules and patterns of behaviour governing the activity exist formally through organisations Blah Blah Blah!!!'
        p4.setAttribute('id', 'b4info')
        body.append(p4)
        body.style.backgroundImage = 'url("https://wallpapers.com/images/hd/sports-balls-reflection-black-syklwrr7mtqr02bp.jpg")'
        setTimeout(function(){b5.style.display='block'}, 10000)
        setTimeout(function(){arrow.style.display='block'} , 10000)
    }
    // Conclusion Button
    b5.onclick = () => {
        b5.style.display = 'none';
        p4.style.display = 'none'
        p5.innerHTML = 'Based on these evidence (which you can look up if you dont belive me), they conclude that volley ball is <em><u>NOT A SPORT</u></em> by definiton. Although it is fun to play, you cant call it a sport because of the "facts" that are CLEARlY SHOWN!!!!'
        p5.setAttribute('id', 'b5info')
        body.append(p5)
        setTimeout(function(){b6.style.display = 'block'}, 8000)
    }
    
})



