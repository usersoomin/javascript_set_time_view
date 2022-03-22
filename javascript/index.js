const time = document.querySelectorAll('.screen span');

setInterval(() => {
    let time_arr = setTime();
    time_arr.forEach((times, index) => getTime(times, index)); //index번호와 time_arr 배열에서 데이터 하나씩 차례로 getTime함수로 전달
}, 1000);

// 현재시간 가져오기
function setTime(){
    let now = new Date();           //현재시간 가져오기
    let hr = now.getHours();        //Date 함수에서 hour 가져오기
    let min = now.getMinutes();     //Date 함수에서 minute 가져오기
    let sec = now.getSeconds();     //Date 함수에서 second 가져오기
    return Array(hr,min,sec);       //Array 배열생성 및 배열 넘겨주기
}
function getTime(num, index){
    if (num < 10) num = '0' + num;  //10 미만이여 한자릿수로 되기 때문에 0 추가
    time[index].innerText = num;    //span element에 시,분,초 추가
}