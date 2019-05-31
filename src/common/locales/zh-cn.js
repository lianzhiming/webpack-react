let locales = {
    labels: {
        colon: '：',
        save: '保存',
        cancel: '取消',
        all: '所有',
        saveAndSubmit: '保存并提交',
        saveAndCreate: '保存并新建',
        submit: '提交',
        delete: '删除',
        add: '新增',
        create: '新建',
        edit: '编辑',
        name: '名称',
        describe: '描述',
        next: '下一步',
        confirm: '确定',
        back: '返回',
        more: '更多',
        phone: '手机号码',
        attachment: '附件',
        quantity: '数量',
        unit: '单位',
        actions: '操作',
        remark: '备注',
        acceptance: '验收',
        score: '分',
        suggest: '建议'
    },
    business: {
        notifyMessage: {
            IsNullErrorFormat: '请至少有一个{0}',
            repeatErrorTipFormat: '{0}有重复',
            getInformationFailedFormat: '获取{0}信息失败，请检查网络连接或稍后再试',
            deleteSuccessFormat: '{0}删除成功。',
            deleteFailedFormat: '{0}删除失败，请稍后再试。',
            saveSuccessFormat: '{0}保存成功。',
            saveFailedFormat: '{0}保存失败，请稍后再试。',
            exportSuccessFormat: '{0}导出成功',
            exportFailedFormat: '{0}导出失败，请稍后再试。',
            submitSuccessFormat: '{0}提交成功。',
            submitFailedFormat: '{0}提交失败，请稍后重试。',
            confirmSuccessFormat: '{0}确认成功。',
            confirmFailedFormat: '{0}确认失败，请稍后重试。',

            canNotBeEmptyFormat: '{0}不能为空',
            whetherToPerformThisOperation: '是否执行此操作',
            phoneError: '请填写正确的手机号',
            shouldBeGreaterThanZero: '{0}应大于0',
            noSelectTipFormat: '请选择{0}'
        },
        upload: {
            uploadFailedTip: '上传文件失败，请检查网络连接情况或稍后重试'
        },
        components: {
            supplierQuoteDetail: {
                flagPriceTypeEmptyTip: '的标杆类型不能为空',
                flagPriceErrorTip: '的标杆单价应大于0',
                supplierEmptyTip: '请选择供应商',
                stagePaymentErrorTip: '阶段付款金额之和必须等于采购金额'
                //supplierMaxLengthErrorTip: '此需求商品已录入三个供应商报价，请勿多录'
            }
        }
    },
    components: {
        common: {

        },
        app:{
            title:'你好',
            buttonTitle:'点我'
        }
    },
    fields: {
        qualityInspectionForm: {
            list: {
                name: '名称',
                description: '描述',
                type: '类型',
                status: '状态',
                actions: '操作'
            }
        }
    },
    enums: {
        visibleRangeTypes: {
            all: '全部',
            customerGroup: '客服组',
            userDefined: '自定义'
        }
    }
};

export default locales;