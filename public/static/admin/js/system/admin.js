define(["jquery", "admin",], function ($, admin) {

    var init = {
        table_elem: 'currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'system.admin/index',
        add_url: 'system.admin/add',
        edit_url: 'system.admin/edit',
        del_url: 'system.admin/del',
        modify_url: 'system.admin/modify',
    };

    var Controller = {

        index: function () {
            admin.table.render({
                elem: '#' + init.table_elem,
                id: init.table_render_id,
                url: admin.url(init.index_url),
                init: init,
                toolbar: ['refresh', 'add', 'delete'],
                cols: [[
                    {type: "checkbox"},
                    {field: 'id', width: 80, title: 'ID', sort: true, align: "center"},
                    {field: 'username', minWidth: 80, title: '登录账户', align: "center"},
                    {field: 'head_img', minWidth: 80, title: '头像', search: false, imageHeight: 40, align: "center", templet: admin.table.image},
                    {field: 'phone', minWidth: 80, title: '手机', align: "center"},
                    {field: 'login_num', minWidth: 80, title: '登录次数', align: "center"},
                    {field: 'remark', minWidth: 80, title: '备注信息', align: "center"},
                    {field: 'status', title: '状态', width: 85, align: "center", search: 'select', selectList: {0: '禁用', 1: '启用'}, filter: 'status', templet: admin.table.switch},
                    {field: 'create_time', minWidth: 80, title: '创建时间', align: "center", search: 'range'},
                    {
                        width: 250, align: 'center', title: '操作', init: init, templet: admin.table.tool, operat: ['edit',
                            [
                                {
                                    class: 'layui-btn layui-btn-normal layui-btn-xs',
                                    text: '设置密码',
                                    open: 'system.admin/password',
                                    auth: 'system.admin/password',
                                    extend: ""
                                }
                            ], 'delete'
                        ]
                    }
                ]],
            });

            admin.listen();
        },
        add: function () {
            admin.listen();
        },
        edit: function () {
            admin.listen();
        },
        password: function () {
            admin.listen();
        }
    };
    return Controller;
});