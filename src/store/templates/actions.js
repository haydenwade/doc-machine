export const FETCH_TEMPLATE = 'FETCH_TEMPLATE';
export const FETCH_TEMPLATE_COMPLETE = 'FETCH_TEMPLATE_COMPLETE';

export default {
    fetchTemplate() {
        return {
            type: FETCH_TEMPLATE,
            payload: {}
        }
    },
    fetchTemplateComplete(template) {
        return {
            type: FETCH_TEMPLATE_COMPLETE,
            payload: {
                template
            }
        };
    }
}