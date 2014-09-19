$MOD('frame.url_for', {
    'topic2' : function(topicid){
        return 'index.html#!topic?topicid=' + topicid;
    },
    'avatar': function(userid){ return 'http://argo.sysu.edu.cn/avatar/' + userid },
    'avatar_b' : function(boardname){ return 'http://argo.sysu.edu.cn/avatar/b/' + boardname + '.jpg' },
    'board': function(boardname){ return 'index.html#!board?boardname=' + boardname},
    'board_it': function(index, boardname, topicid){
        return 'index.html#!board?boardname=' + boardname + '&&index=' + index
         + '&&topic=' + topicid;
    },
    'user': function(userid){ return 'index.html#!user?userid=' + userid},
    'img' : function(path){ return 'img/' + path },
    'post': function(filename, boardname){
        return 'index.html#!flow?filename=' + filename + '&&boardname='
            + boardname;
    },
    'topic' : function(filename, boardname){
        return 'index.html#!topic?boardname=' + boardname + '&&filename=' + filename;
    },
    'mailbox': function(index){
        if(index){
            return 'index.html#!mail?index=' + index;
        }
        else{
            return 'index.html#!mail';
        }
    },
    'readmail': function(index){ return 'index.html#!readmail?index=' + index; },
    'page': function(path){ return 'index.html#!page?path=' + path;},
    'root': function(path){ return location.protocol + '//' + location.host + path;},
    'attach': function(boardname, filename){
        return 'http:/argo.sysu.edu.cn/attach/' + boardname + '/' + filename;
    },
    'url': function(path){ return DATA_ROOT + '/n/' + path;},
    'admin_board': function(boardname){
        return 'index.html#!admin_board?boardname=' + boardname ;
    },
    'ann': function(reqpath){ return 'ann.html#!read?reqpath=' + reqpath; },
    'index': function(){ return 'index.html#!home' }
    
})
