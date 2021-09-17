// main-container
class ContentFields {
  constructor (fieldName, nodeItem) {
    this.fieldName = fieldName;
    this.nodeItem = nodeItem;
  }

  get showName() {
    return this.fieldName;
  }

  displayOn(flg) {
    if (flg) {
      this.nodeItem.style.display = 'block';
    }
    else {
      this.nodeItem.style.display = 'none';
    }
  }
}

// class MsgContentField extends ContentFields {
//   displayOn(flg) {
//     this.nodeItem.style.display = 'block';
//   }
// }

// サイドバーの展開
const arrowToRight = document.querySelector('.arrow');
const rightIcon = document.querySelector('.icon').style;
const header = document.querySelector('.header').style;
const gridContainer = document.querySelector('.grid-container').style;
const list  = document.querySelectorAll('.header-li');
const title = document.querySelector('.title-bar');
let activeSign = true;
// main-content
const ct_home  = document.querySelector('.content-home');
const ct_about = document.querySelector('.content-about');
const ct_works = document.querySelector('.content-works');
const ct_msg   = document.querySelector('.content-message');
const homeIns  = new ContentFields('li-home', ct_home);
const aboutIns = new ContentFields('li-about', ct_about);
const worksIns = new ContentFields('li-works', ct_works);
const msgIns   = new ContentFields('li-message', ct_msg);
const insArr = [homeIns, aboutIns, worksIns, msgIns];


// サイドバーの開閉動作
let moveHeader = () => {
  if (activeSign) {
    // サイドバーを左へ閉じる
    header.width = '7rem';
    // 矢印を180度回転し移動させる
    rightIcon.transform = 'rotateY(0deg)';
    arrowToRight.style.right = '-0.5rem';
    // 展開状態フラグの変更
    activeSign = false;
  } else {
    // サイドバーを右へ展開する
    header.width = '20rem';
    // 矢印を180度回転し移動させる
    rightIcon.transform = 'rotateY(180deg)';
    arrowToRight.style.right = '-12rem';
    // 展開状態フラグの変更
    activeSign = true;
  }
};
arrowToRight.addEventListener('click', moveHeader);


// add active class in selected tab
function activeLink() {
  let liName = '';

  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');

  // main-contentのcontent切り替え動作
  liName = this.classList[1]; // 各リストのcssクラス名
  // activeクラスが付与されているli要素のコンテンツを表示する
  for (let i = 0; i < insArr.length; i++) {
    if (liName === insArr[i].showName) {
      insArr[i].displayOn(true);
    }
    else {
      // if (liName !== 'li-message') {
      //   insArr[i].displayOn(false);
      // }
      // else {
      //   ct_msg.classList.add('fadeInAnime');
      // }
      insArr[i].displayOn(false);  // もし動作を元に戻す場合はこちら
    }
  }
}
list.forEach((item) => item.addEventListener('click', activeLink));