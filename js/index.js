$(function() {
    
    // 1.全选、全不选功能
    $(".checkall").change(function() {
        // console.log($(this).prop("checked"));
        $(".j-checkbox , .checkall").prop("checked",$(this).prop("checked"));
    });
    // 商品全选中，全选框选中
    $(".j-checkbox").change(function() {
        console.log(1);
        if($(".j-checkbox:checked").length === $(".j-checkbox").length){
            $(".checkall").prop("checked" , true);
        }else {
            $(".checkall").prop("checked" , false);
        }
    });
    
    // 计算总件数和总价格
    // 增加按钮
    $(".increment").click(function() {
        // 数量
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        n++;
        $(this).siblings('.itxt').val(n);
        // 价格
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("¥" + (p*n).toFixed(2) );
        getSum();
        
    });

    // 减少商品数量
    $(".decrement").click(function() {
       
        // 数量
        var n = $(this).siblings('.itxt').val();
        // console.log(n);
        if(n == 1){
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);
        // 价格
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        // console.log(p);
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("¥" + (p*n).toFixed(2));
        getSum();
    });
    
    // 手动输入
    $(".itxt").change(function() {
        var n = $(this).val();
        var p = $(this).parents(".p-num").siblings(".p-price").html();
        p = p.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("¥" + (p*n).toFixed(2));
        getSum();
    })


    // 计算函数getSum
    getSum();
    function getSum(i , ele) {
        var count = 0 ;
        var money = 0;
        $(".itxt").each(function(i,ele) {
         count += parseInt($(ele).val());
         });
        $(".amount-sum em").text(count);

         $(".p-sum").each(function(i,ele) {
             money += parseFloat($(ele).text().substr(1));
         });
         $(".price-sum em").text("¥" + money.toFixed(2));

    }
    // 删除商品
    // 单个删除
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    // 删除选中
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    // 清理购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })









})
    