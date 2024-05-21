const ContentStatus = {
    DRAFT: 0,
    DRAFT_UPLOADING: 1,
    DRAFT_PROCESSING: 2,
    DRAFT_READY: 3,
    PRELIVE: 4,
    LIVE: 5,
    SUSPEND: 6,
    DRAFT_FAILED: 10,
    EXPIRED: 99
}
const Content_API_Type = {
    CREATE :0,
    UPDATE :1
}
export{Content_API_Type}
export default ContentStatus