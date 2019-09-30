/**
 * 对返回的数据进行一层包裹，保证前后端数据交互的格式一致
 * @param data 需要返回的数据
 * @param code 请求的状态码
 * @param msg 如果发生错误的错误信息
 */
export const wrapperResponse = (data: any = null, code: number = 200, msg: string = '请求成功'): object => ({ data, code, msg });