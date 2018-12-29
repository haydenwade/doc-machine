export const SET_RESUME_CONTENT = 'SET_RESUME_CONTENT';
export const START_OVER = 'START_OVER';

export default {
    setResumeContent(content) {
        return {
            type: SET_RESUME_CONTENT,
            payload: {
                content
            }
        }
    },
    startOver() {
        return {
            type: START_OVER,
            payload: {}
        };
    }
}