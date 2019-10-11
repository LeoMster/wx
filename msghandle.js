const formatMsg = require('./fmtwxmsg');

function help(){
    return `这是一个消息回复测试程序，会把消息原样返回，但是目前不支持视频类型的消息`
}

function userMsg(wxmsg,retmsg){
    if(wxmsg.MsgType == 'text'){
        switch(wxmsg.Content){
            case "帮助":
            case "help":
            case "？":
                retmsg.msg = help();
                retmsg.msgtype = 'text';
                break;
            case "who":
                retmsg.msg = '姓名：李航；学号：2017012065；';
                retmsg.msgtype = 'text';
                break;
            default:
                retmsg.msg = wxmsg.Content;
                retmsg.msgtype = 'text';
        }
        return formatMsg(retmsg);
    }else{
        switch(wxmsg.MsgType){
            case 'image':
            case 'voice':
                    retmsg.msg = wxmsg.MediaId;
                    retmsg.msgtype = wxmsg.MsgType;
                    break;
            default:
                    retmsg.msg = '不支持的类型';
        }
        return formatMsg(retmsg);
    }
}

exports.msgDispatch = function(wxmsg,retmsg){
    return userMsg(wxmsg,retmsg);
};