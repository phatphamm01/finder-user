import { useEffect, useState } from 'react';

import EditIcon from '@/assets/svgs/EditIcon';
import PlusIcon from '@/assets/svgs/PlusIcon';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import PersonalityType from '@/components/PersonalityType';
import Space from '@/components/Space';

const MAX_HOBBIES = 5;
const MIN_HOBBIES = 3;

interface Props {
  values: string[];
  onChangeValue: (hobbies: string[]) => void;
}

const HobbiesDialog = ({ values, onChangeValue }: Props) => {
  const [hobbies, setHobbies] = useState<string[]>(values);

  useEffect(() => {
    setHobbies(values);
  }, [values]);

  const [showDialog, setShowDialog] = useState(false);

  const onHobbitClick = (value: string) => {
    const index = hobbies.indexOf(value);
    if (index === -1) {
      if (hobbies.length === MAX_HOBBIES) return;

      setHobbies([...hobbies, value]);
    } else {
      setHobbies(hobbies.filter(item => item !== value));
    }
  };

  const handleSubmit = () => {
    onChangeValue(hobbies);
    setShowDialog(false);
  };

  const existsHobbit = (value: string) => hobbies.indexOf(value) !== -1;
  const showEdit = values.length > 0;

  return (
    <>
      <p className='mb-1 text-16 font-semibold'>Sở Thích</p>

      <Button
        type='button'
        className='!text-16'
        label={showEdit ? 'Sửa sở thích' : 'Thêm Sở Thích'}
        variant='outline'
        icon={showEdit ? <EditIcon /> : <PlusIcon />}
        onClick={() => setShowDialog(true)}
      />

      <Modal visible={showDialog} onClose={() => setShowDialog(false)}>
        <div className='w-[640px] max-h-[80vh] p-2 overflow-y-auto scroll-hidden text-center'>
          <h3 className='text-32 text-base font-semibold'>Sở Thích</h3>
          <Space h={20} />
          <p className='text-14 text-text-secondary'>
            Hãy cho mọi người biết bạn thích những gì bằng cách thêm thông tin
            vào hồ sơ.
          </p>
          <div className='flex justify-center gap-0.8 flex-wrap max-w-[552px] mx-auto my-1.2'>
            {HOBBIES.map((hobbit, index) => (
              <PersonalityType
                key={index}
                text={hobbit}
                isActive={existsHobbit(hobbit)}
                onClick={onHobbitClick}
              />
            ))}
          </div>
          <Button
            disabled={hobbies.length < MIN_HOBBIES}
            label={`Tiếp tục (${hobbies.length}/${MAX_HOBBIES})`}
            size='large'
            width='full'
            onClick={handleSubmit}
          />
        </div>
      </Modal>
    </>
  );
};

export default HobbiesDialog;

const HOBBIES = [
  'Thế Hệ 9x',
  'Harry Potter',
  'SoundCloud',
  'Spa',
  'Chăm sóc bản thân',
  'Heavy Metal',
  'Tiệc gia đình',
  'Gin Tonic',
  'Thể dục dụng cụ',
  'Hot Yoga',
  'Thiền',
  'Sushi',
  'Spotify',
  'Hockey',
  'Bóng rổ',
  'Đấu thơ',
  'Tập luyện tại nhà',
  'Nhà hát',
  'Khám phá quán cafe',
  'Thủy cung',
  'Giày Sneaker',
  'Instagram',
  'Suối nước nóng',
  'Đi dạo',
  'Chạy bộ',
  'Du lịch',
  'Giao lưu ngôn ngữ',
  'Phim ảnh',
  'Chơi guitar',
  'Phát triển xã hội',
  'Tập gym',
  'Mạng xã hội',
  'Hip Hop',
  'Chăm sóc da',
  'J-Pop',
  'Shisha',
  'Cricket',
  'Phim truyền hình Hàn Quốc',
  'Làm việc tự do',
  'K-Pop',
  'Trượt ván',
  'Gospel',
  'Group X',
  'Potterhead',
  'Thử những thứ mới',
  'Nhiếp ảnh',
  'Bollywood',
  'Đọc sách',
  'Hát',
  'Thể thao',
  'Thơ',
  'Hài độc thoại',
  'Cafe',
  'Karaoke',
  'Fortnite',
  'Lặn tự do',
  'Phát triển bản thân',
  'Nhận thức về sức khỏe tâm thần',
  'Tour ẩm thực',
  'Quyền cử tri',
  'Jiu-jitsu',
  'Biến đổi khí hậu',
  'Triển lãm trưng bày',
  'Dắt chó đi dạo',
  'Quyền cho cộng đồng LGBTQ+',
  'Nữ quyền',
  'Phòng thực tế ảo',
  'Escape Café',
  'Mua sắm',
  'Bữa brunch',
  'Đầu tư',
  'Mô tô nước',
  'Dòng nhạc Reggaeton',
  'Quần áo second-hand',
  'Đấu tranh cho Người Da Đen',
  'Chạy bộ',
  'Phượt',
  'Thời trang Vintage',
  'Vũ điệu Vogue',
  'Du lịch Couchsurfing',
  'Happy Hour',
  'Sự hòa nhập',
  'Nhạc đồng quê',
  'Bóng đá',
  'Trượt patin',
  'Đầu tư',
  'Quần vợt',
  'Kem',
  'Trượt băng',
  'Quyền con người',
  'Triển lãm',
  'Lợn quay',
  'Trượt tuyết',
  'Chèo cano',
  'Nhạc kịch West End',
  'Trượt ván tuyết',
  'Pilates',
  'Năm môn phối hợp',
  'Sân khấu Broadway',
  'PlayStation',
  'Cheerleading',
  'Hợp xướng',
  'Múa cột',
  'Bóng đá mini',
  'Đua xe ô tô',
  'Pinterest',
  'Lễ hội',
  'Trò câu đố tại quán rượu',
  'Catan',
  'Cosplay',
  'Đua motor thể thao',
  'Quán cafe',
  'Thể thao điện tử',
  'Sáng tạo nội dung',
  'Đua xe đạp',
  'Cày TV show',
  'Sáng tác nhạc',
  'Body Combat',
  'Xăm hình',
  'Sơn',
  'Body Jam',
  'Chèo ván SUP',
  'Padel',
  'Blackpink',
  'Lướt sóng',
  'Chơi bowling',
  'Nhạc điện tử Grime',
  'Nhạc Pop UK thập niên 90',
  'Body Pump',
  'Bar bên bờ biển',
  'Body Step',
  'Dù lượn',
  'Upcycling',
  'V-Pop',
  'Sự bình đẳng',
  'Chiêm tinh',
  'Xe phân khối lớn',
  'Cưỡi ngựa',
  'Bún chả',
  'Khởi nghiệp',
  'Rượu Sake',
  'BTS',
  'Nấu ăn',
  'Bảo vệ môi trường',
  'Đấu kiếm',
  'Bóng đá',
  'Chơi saxophone',
  'Sci-Fi',
  'Nhảy',
  'Liên hoan phim',
  'Freeletics',
  'Làm vườn',
  'Đầu bếp nghiệp dư',
  'Chương trình du học trao đổi',
  'Đi Xông Hơi',
  'Nghệ thuật',
  'Chính trị',
  'Flamenco',
  'Bảo tàng',
  'Hoạt động xã hội',
  'Running Man',
  'Tổ chức tự trị phi tập trung',
  'Bất động sản',
  'Podcast',
  'Quyền cho người khuyết tật',
  'Rap Việt',
  'Đi quẩy',
  'Pimms',
  'BBQ',
  'Xem phim ngoài trời',
  'Leo núi đá',
  'Bia thủ công',
  'Trà đá',
  'Chơi trống',
  'Trà',
  'Board games',
  'Roblox',
  'Quán rượu',
  'Rock',
  'Vũ điệu Tango',
  'Vẽ',
  'Giải đố',
  'Phở',
  'Đi tình nguyện',
  'Môi trường',
  'Rollerskating',
  'Rượu',
  'Dungeons & Dragons',
  'Lẩu',
  'Làm video blog',
  'Nhạc EDM',
  'Mì ramen',
  'Nâng tạ',
  'Nhạc Live',
  'Viết',
  'Xbox',
  'Hòa bình cho thế giới',
  'Đấu vật',
  'Văn học',
  'Manga',
  'Tháng Tự hào',
  'Chạy marathon',
  'Trang điểm',
  'Trao quyền cho giới trẻ',
  'YouTube',
  'Võ thuật',
  'Marvel',
  'Nấu đồ chay',
  'Vermouth',
  'Đồ ăn Hàn Quốc',
  'Twitter',
  'Bóng chuyền',
  'Tour đi bộ',
  'Vinyasa',
  'Thực tế ảo',
  'Liên Minh Huyền Thoại',
  'NFT',
  'Khám phá quán bar',
  'Nintendo',
  'Bóng chày',
  'Tiệc tùng',
  'Múa ba lê',
  'Ban nhạc',
  'Game online',
  'Battle Ground',
  'Tennis bãi biển',
  'Cuộc sống về đêm',
  'Mua sắm online',
  'Thuyền buồm',
  'Thể dục dụng cụ Olympic',
  'Chơi đàn bass',
  'Môi giới online',
  'Quân đội',
  'Meme',
  'Among Us',
  'Đua xe máy',
  'Lái xe máy',
  'Metaverse',
  'Chánh niệm',
  'Acapella',
  'Nhạc cụ',
  'Triển lãm nghệ thuật',
  'Viết nhạc',
  'Đi bộ đường trường',
  'Thể dục nghệ thuật',
  'Những ngọn núi',
  'Bắn cung',
  'Atari',
  'Phượt',
  'Câu cá',
  'Đi quẩy',
  'Đồ ăn đường phố',
  'Crossfit',
  'Hòa nhạc',
  'Leo núi',
  'Nướng bánh',
  'Cắm trại',
  'Viết blog',
  'Sưu tập',
  'Xe hơi',
  'Khởi nghiệp',
  'Trà sữa',
  'Giải bóng chày trường cấp ba (Đài Loan)',
  'Cầu lông',
  'Phong cách sống năng động',
  'Thời trang',
  'Anime',
  'NBA',
  'MLB (Liên đoàn bóng chày Mỹ)',
  'Nhạc Funk',
  'Cocktail Caipirinha',
  'Các hoạt động trong nhà',
  'Tempeh',
  'Tự làm mọi việc',
  'Các lễ hội trong thành phố',
  'Đạp xe',
  'Hoạt động ngoài trời',
  'TikTok',
  'Đi picnic',
  'Twitch',
  'Hài kịch',
  'Nhạc Trap',
  'Âm nhạc',
  'Ba môn phối hợp',
  'Netflix',
  'Disney',
  'Bóng bầu dục',
  'Açaí',
  'Vũ điệu Samba',
  'Bói bài Tarot',
  'Chứng khoán',
  'Cổ phiếu',
  'Bơi lội',
  'Bóng bàn',
  'Giết thời gian',
  'Luyện tập thể thao',
  'Tập yoga',
  'Phim kinh dị',
  'Quyền anh',
  'Đi chill tại bar',
];
