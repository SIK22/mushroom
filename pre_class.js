// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image
// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/mb9sKrfZB/";
let model, webcam, labelContainer, maxPredictions;
// Load the image model and setup the webcam
async function init() {

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    labelContainer = document.getElementById('label-container');
  for (let i = 0; i < maxPredictions; i++) {
        // and class labels
        labelContainer.appendChild(document.createElement('div'));
    }
 }
// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    var image = document.getElementById('mush-image');
    var my_index = 0

    const prediction = await model.predict(image, false);
    for (let i = 0; i < maxPredictions; i++) {
        if ( i == 0 ) {
            my_index = i;
        } else {
            if (prediction[i].probability > prediction[my_index].probability){
              my_index = i;
            } else{
              continue;
            }
        }


    }
    const classPrediction =
            prediction[my_index].className + '일 확률이 ' + prediction[my_index].probability.toFixed(2) * 100 + '% 입니다';
    labelContainer.childNodes[my_index].innerHTML = classPrediction;
}
console.log(prediction[0].className);
var resultTitle, resultExplain, resultCeleb;
  switch (prediction[0].className) {
        case "0":
            resultTitle = "개나리광대버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "1":
            resultTitle = "곰보버섯"
            resultExplain = "식용가능"
            resultCeleb = "비슷한 버섯"
            break;
        case "2":
            resultTitle = "노란꼭지버섯"
            resultExplain = "!"
            resultCeleb = ""
            break;
        case "3":
            resultTitle = "노란다발버섯"
            resultExplain = ""
            resultCeleb = ""
            break;
        case "4":
            resultTitle = "노란싸리버섯""
            resultExplain = ""
            resultCeleb = ""
            break;
        case "5":
            resultTitle = "노루궁뎅이버섯"
            resultExplain = "식용가능"
            resultCeleb = "비슷한 버섯"
            break;
        case "6":
            resultTitle = "달걀버섯"
            resultExplain = "식용가능"
            resultCeleb = "비슷한 버섯"
            break;
        case "7":
            resultTitle = "붉은싸리버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "8":
            resultTitle = "뽕나무버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "9":
            resultTitle = "싸리버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "10":
            resultTitle = "표고버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "11":
            resultTitle = "혈색무당버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "12":
            resultTitle = "개암버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "13":
            resultTitle = "노란난버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        case "14":
            resultTitle = "갈황색미치광이버섯"
            resultExplain = "주의! 독버섯입니다"
            resultCeleb = "비슷한 버섯:"
            break;
        default:
            resultTitle = "알수없음"
            resultExplain = ""
            resultCeleb = ""
    }

}
var title = "<div class='" + prediction[0].className + "-mushroom-title'>" + resultTitle + "</div>"
var explain = "<div class='mushroom-explain pt-2'>" + resultExplain + "</div>"
var celeb = "<div class='" + prediction[0].className + "-mushroom-celeb pt-2 pb-2'>" + resultCeleb + "</div>"
$('.result-message').html(title + explain + celeb);


        var labelTitle;
        switch (prediction[i].className) {
            case "0":
                labelTitle = "개나리광대버섯"
                break;
            case "1":
                labelTitle = "곰보버섯"
                break;
            case "2":
                labelTitle = "노란꼭지버섯"
                break;
            case "3":
                labelTitle = "노란다발버섯"
                break;
            case "4":
                labelTitle = "노란싸리버섯"
                break;
            case "5":
                labelTitle = "노루궁뎅이버섯"
                break;
            case "6":
                labelTitle = "달걀버섯"
                break;
            case "7":
                labelTitle = "붉은싸리버섯"
                break;
            case "8":
                labelTitle = "뽕나무버섯"
                break;
            case "9":
                labelTitle = "싸리버섯"
                break;
            case "10":
                resultTitle = "표고버섯"
                break;
            case "11":
                labelTitle = "혈색무당버섯"
                break;
            case "12":
                labelTitle = "개암버섯"
                break;
            case "13":
                labelTitle = "노란난버섯"
                break;
            case "14":
                labelTitle = "갈황색미치광이버섯"
                break;
            default:
                labelTitle = "알수없음"
                resultExplain = ""
                resultCeleb = ""
        }
        var label = "<div class='mushroom-label d-flex align-items-center'>" + labelTitle + "</div>"
        var bar = "<div class='bar-container position-relative container'><div class='" + prediction[i].className + "-box'></div><div class='d-flex justify-content-center align-items-center " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='d-block percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
        labelContainer.childNodes[i].innerHTML = label + bar;
    }
}
