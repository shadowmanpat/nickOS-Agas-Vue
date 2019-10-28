
const baseURL = "http://www.nickagas.com/wp-json/wp/v2"
const pageUrl = "/pages/"
const categoriesUrl = "/categories?page="
const postsUrl = "/posts?"
const categories = "&categories="
const page = "&page="
const search = "&search="
export default Object.freeze({
    GETPAGEURL: baseURL+pageUrl,
    GETCATEGORIESURL: baseURL+categoriesUrl,
    GETPOSTSURL: baseURL+postsUrl,
    CATEGORIES: categories,
    PAGE: page,
    SEARCH: search
  })