import { Dialog } from "@/shared/ui"
import { useGetUser } from "../api/use-get-user"

export const UserInfoModal = ({
  userId,
  setSelectUserId,
}: {
  userId: number
  setSelectUserId: React.Dispatch<React.SetStateAction<number | null>>
}) => {
  const { userData, isLoading, showUserModal, setShowUserModal } = useGetUser(userId)

  if (isLoading) {
    return
  }

  return (
    <Dialog
      open={showUserModal}
      onOpenChange={() => {
        setShowUserModal(false)
        setSelectUserId(null)
      }}
    >
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>사용자 정보</Dialog.Title>
        </Dialog.Header>
        {userData ? (
          <div className="space-y-4">
            <img src={userData?.image} alt={userData?.username} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-xl font-semibold text-center">{userData?.username}</h3>
            <div className="space-y-2">
              <p>
                <strong>이름:</strong> {userData?.firstName} {userData?.lastName}
              </p>
              <p>
                <strong>나이:</strong> {userData?.age}
              </p>
              <p>
                <strong>이메일:</strong> {userData?.email}
              </p>
              <p>
                <strong>전화번호:</strong> {userData?.phone}
              </p>
              <p>
                <strong>주소:</strong> {userData?.address?.address}, {userData?.address?.city},{" "}
                {userData?.address?.state}
              </p>
              <p>
                <strong>직장:</strong> {userData?.company?.name} - {userData?.company?.title}
              </p>
            </div>
          </div>
        ) : null}
      </Dialog.Content>
    </Dialog>
  )
}
