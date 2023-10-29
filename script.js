
const book = document.getElementById("books");

//ALL CATEGORIES::

const booksShow = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/top-books`);
    const data = await res.json();

    const h1 = document.createElement('h1');
    h1.textContent = "Best Sellers Books"
    book.appendChild(h1)

    data.forEach(Bdata => {
        const bands = document.createElement('div');
        bands.classList = `band`

        const h4 = document.createElement('h4');
        h4.classList = `h4`

        h4.textContent = Bdata.list_name
        // console.log(Bdata.list_name)

        const img_box = document.createElement('div');
        img_box.classList = `Img-Box`

        const Idata = Bdata.books

        // const SeeMore = document.createElement('button');
        // SeeMore.classList = 'See_More'

        // SeeMore.textContent = "See More"

        bands.appendChild(h4);
        Idata.forEach(img_data => {
            const Img_Div = document.createElement('div');
            Img_Div.classList = `img-div`

            const img_url = document.createElement('img');
            img_url.src = img_data.book_image

            img_url.addEventListener('click',() =>{
                viewDetails(img_data);
            })

            const title = document.createElement('span');
            title.classList = `Title` 

            const author = document.createElement('span');
            author.classList = `Author` 

            const spanDiv = document.createElement('div');
            spanDiv.classList = `Span-Div`
            
            title.textContent = img_data.title;
            author.textContent = img_data.author;

            Img_Div.appendChild(img_url)
            spanDiv.appendChild(title)
            spanDiv.appendChild(author)

            Img_Div.appendChild(spanDiv)

            img_box.appendChild(Img_Div);
            bands.appendChild(img_box);
        })
        book.appendChild(bands);
        // book.appendChild(SeeMore)
    })
}
//ALL Categories Function::

const AllCat = document.getElementById('All');
AllCat.addEventListener('click',function(){
    book.textContent = ''
    booksShow();
})
booksShow();

//Audio Fiction::

const AudioF = document.getElementById('AudioF');
AudioF.addEventListener('click',function(){
    AudioFic();
})
const AudioFic = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Audio%20Fiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Audio Fiction"
    book.appendChild(h1)

    let Afic = data;
    console.log(Afic);

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//
const MIS = document.getElementById('Mis');
MIS.addEventListener('click',function(){
    MIS_();
})
const MIS_ = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Advice%20How-To%20and%20Miscellaneous`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Audio Nonfiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}


//Audio Non-Fiction::

const Audio_Non = document.getElementById('AudioNon');
Audio_Non.addEventListener('click',function(){
    AudioNon();
})
const AudioNon = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Audio%20Nonfiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Audio Nonfiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Business Books::

const Busi_book = document.getElementById('BusiBook');
Busi_book.addEventListener('click',function(){
    Busibook();
})
const Busibook = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Business%20Books`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Business Books"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Childrens Middle Grade Hardcover::

const Child_MG = document.getElementById('ChildG');
Child_MG.addEventListener('click',function(){
    ChildG();
})
const ChildG = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Childrens%20Middle%20Grade%20Hardcover`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Childrens Middle Grade Hardcover"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
// Combined Print and E-Book Fiction::

const E_bookFic = document.getElementById('E-bookFic');
E_bookFic.addEventListener('click',function(){
    EBookFic();
})
const EBookFic = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Combined%20Print%20and%20E-Book%20Fiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Combined Print and E-Book Fiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Combined Print and E-Book Nonfiction::

const E_bookNonFic = document.getElementById('E-bookNonFic');
E_bookNonFic.addEventListener('click',function(){
    EbookNonFic();
})
const EbookNonFic = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Combined%20Print%20and%20E-Book%20Nonfiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Combined Print and E-Book Nonfiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//Graphic Books and Manga::

const Gmanga = document.getElementById('GManga');
Gmanga.addEventListener('click',function(){
    gManga();
})
const gManga = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Graphic%20Books%20and%20Manga`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Graphic Books and Manga"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//Hardcover Fiction::

const HardcoverF = document.getElementById('HFic');
HardcoverF.addEventListener('click',function(){
    Hardcover_F();
})
const Hardcover_F = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Hardcover%20Fiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Hardcover Fiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Hardcover Nonfiction::

const HardcoverNF = document.getElementById('HNFic');
HardcoverNF.addEventListener('click',function(){
    Hardcover_NF();
})
const Hardcover_NF = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Hardcover%20Nonfiction`);
    const data = await res.json();
    console.log(data)

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Hardcover Nonfiction"
    book.appendChild(h1)

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    data.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Mass Market Monthly::

const MaMaMo = document.getElementById('MMM');
MaMaMo.addEventListener('click',function(){
    MaMaMo_();
})
const MaMaMo_ = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Mass%20Market%20Monthly`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Mass Market Monthly"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Middle Grade Paperback Monthly::

const paperBack = document.getElementById('paper_back');
paperBack.addEventListener('click',function(){
    PaperBack();
})
const PaperBack = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Middle%20Grade%20Paperback%20Monthly`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Middle Grade Paperback Monthly"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//Paperback Nonfiction::

const paperBackNfic = document.getElementById('paper_backNfic');
paperBackNfic.addEventListener('click',function(){
    PaperBackNfic();
})
const PaperBackNfic = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Paperback%20Nonfiction`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Paperback Nonfiction"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Picture Books::

const PicBooks = document.getElementById('Pic_books');
PicBooks.addEventListener('click',function(){
    PicBooks_();
})
const PicBooks_ = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Picture%20Books`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Picture Books"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//Series Books::

const SeriBooks = document.getElementById('S_books');
SeriBooks.addEventListener('click',function(){
    Seri_Books();
})
const Seri_Books = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Series%20Books`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Series Books"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}
//Trade Fiction Paperback::

const TradeFic = document.getElementById('Trade_fic');
TradeFic.addEventListener('click',function(){
    Trade_Fic();
})
const Trade_Fic = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Trade%20Fiction%20Paperback`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Trade Fiction Paperback"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Young Adult Hardcover::

const Young_Adult = document.getElementById('YoungAdult');
Young_Adult.addEventListener('click',function(){
    Young_Adult_();
})
const Young_Adult_ = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Young%20Adult%20Hardcover`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Young Adult Hardcover"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//Young Adult Paperback Monthly::

const Young_Adult_pap = document.getElementById('YounAdultPap');
Young_Adult_pap.addEventListener('click',function(){
    Young_Adult_pap_();
})
const Young_Adult_pap_ = async () =>{
    const res = await fetch(`https://books-backend.p.goit.global/books/category?category=Young%20Adult%20Paperback%20Monthly`);
    const data = await res.json();

    book.textContent = ''

    const h1 = document.createElement('h1');
    h1.textContent = "Young Adult Paperback Monthly"
    book.appendChild(h1)

    let Afic = data;

    const bands = document.createElement('div');
    bands.classList = `band`

    const img_box = document.createElement('div');
    img_box.classList = `Img-Box`

    Afic.forEach(AF=>{
        const Img_Div = document.createElement('div');
        Img_Div.classList = `img-div`

        const img_url = document.createElement('img');
        img_url.src = AF.book_image

        img_url.addEventListener('click',() =>{
            viewDetails(AF);
        })

        const title = document.createElement('span');
        title.classList = `Title` 

        const author = document.createElement('span');
        author.classList = `Author` 

        const spanDiv = document.createElement('div');
        spanDiv.classList = `Span-Div`
        
        title.textContent = AF.title;
        author.textContent = AF.author;

        Img_Div.appendChild(img_url)
        spanDiv.appendChild(title)
        spanDiv.appendChild(author)

        Img_Div.appendChild(spanDiv)

        img_box.appendChild(Img_Div);
        bands.appendChild(img_box);        
    })
    book.appendChild(bands);
}

//View Details::
const viewDetails = (details) => {
    modal.showModal();
    const Image_cont = document.getElementById('Image-cont');
    const titleB = document.getElementById('title');
    const Author = document.getElementById('auth');
    Author.style.fontStyle = "Italic"
    const buyList = document.getElementById('buylist');

    Image_cont.innerHTML = `<img src="${details.book_image}" alt="">`;
    titleB.innerText = details.title;
    console.log(details)
    Author.innerText = details.author;

    const buy_list = details.buy_links;
    console.log(buy_list)

    buyList.innerHTML = `
            <li><a href="${buy_list[0].url}" target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"></a><li>
            <li><a href="${buy_list[1].url}" target="_blank"><img src="https://seeklogo.com/images/A/apple-books-logo-8EECFC8795-seeklogo.com.png"></a><li>
        `
}

//Toggle Button::
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
