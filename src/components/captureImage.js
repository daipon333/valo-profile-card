import html2canvas from "html2canvas";

function captureImage(elem, scale) {
  html2canvas(document.querySelector("#capture"), {}).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = `MyProfile.png`;
    link.click();
  });
}

export default captureImage;

// document.querySelector(".btn_generate").addEventListener(
//   "click",
//   (ev) => {
//     //   let val = parseFloat(document.querySelector('.text_scale').value) || null;
//     //   if(val === null){
//     //     alert('書き出すスケールを入力してください（0以上）');
//     //     return;
//     //   }
//     generate_image(document.querySelector(".capture"), val);
//   },
//   false
// );

// //Canvasに変換する前に大きさを変更する
// function generate_image(elem, scale) {
//   //書き出し画像を格納する要素を初期化
//   //   document.querySelector('.generated_img').innerHTML = '';

//   //変形前の要素の大きさを取得
//   const rect = elem.getBoundingClientRect();

//   //要素を複製し、変形させる（表示上は見えない）
//   document.querySelector(".clone_elem").append(elem.cloneNode(true));
//   let clone_elem = document.querySelector(".clone_elem>.imageTarget");
//   clone_elem.style.transform = "scale(1920, 1080)";

//   //canvasに変換
//   html2canvas(clone_elem, {
//     width: rect.width / (100 / scale),
//     height: rect.height / (100 / scale),
//     scale: 1, //ここはRetinaディスプレイでキレイに出したいときは工夫が必要です
//   })
//     .then((canvas) => {
//       canvas.toBlob((blob) => {
//         var blobURL = window.URL.createObjectURL(blob);
//         let img = document.createElement("img");
//         img.src = blobURL;

//         img.addEventListener("load", () => {
//           document.querySelector(".generated_img").append(img);
//         });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
