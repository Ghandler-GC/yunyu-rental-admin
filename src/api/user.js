import request from '@/utils/request'

/**
 * 获取应用用户列表
 */
export const getAppUserListApi = ({
  userId,
  phoneNumber,
  nickName,
  pageNo,
  pageSize
}) => {
  return request({
    method: 'post',
    url: '/admin/app_user/list/search',
    data: {
      userId,
      phoneNumber,
      nickName,
      pageNo,
      pageSize
    }
  })
}
