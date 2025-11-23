'use client';

import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import DetailInfoGarden from '@/components/DetailProduct/DetailInfoGarden';
import { useGardenerDetail } from '@/components/hooks/gardener';
import { gardenerActions } from '@/features/gardener/gardenerSlice';

const GardenerLayout = (): React.ReactElement => {
  // const router = useRouter();
  const params = useParams();
  // const [, setActiveTab] = useState('fruits');

  const { data, onGetGardenById } = useGardenerDetail(params.gardenerId);
  const dispatch = useDispatch();

  // const handleButtonClick = (code: string) => {
  //   setActiveTab(code);
  //   router.push(`/gardeners/${params.gardenerId}/${code}`);
  // };

  useEffect(() => {
    onGetGardenById;
  }, [onGetGardenById]);

  dispatch(gardenerActions.setGardeners(data));
  return (
    <div>
      {/* <div>
        <Link href="/" className="text-[#699C3A]">
          Hợp Tác Xã
        </Link>
        <span className="px-2">{'>'}</span>
        <Link href="/gardeners/all" className="text-[#699C3A]">
          Nhà vườn
        </Link>
        <span className="px-2">{'>'}</span>
        <span>Nhà vườn {`${gardeners?.first_name} ${gardeners?.last_name}`}</span>
      </div> */}
      <DetailInfoGarden id={params.gardenerId as string} />
      {/* <div className="mt-[42px]">
        <div className="min-h-screen min-w-full">
          <div className="mb-[30px] inline-flex space-x-[5px]">
            <div className="min-w-[120px] flex-1">
              <Button
                size="lg"
                fullWidth
                variant="text"
                className="overflow-hidden bg-white"
                shadow
                borderRadius="normal"
                isActive={pathname.includes('fruits')}
                onClick={() => handleButtonClick('fruits')}
              >
                Quả
              </Button>
            </div>
            <div className="min-w-[120px] flex-1">
              <Button
                size="lg"
                fullWidth
                variant="text"
                shadow
                className="bg-white"
                borderRadius="normal"
                isActive={pathname.includes('trees')}
                onClick={() => handleButtonClick('trees')}
              >
                Cây bonsai
              </Button>
            </div>
          </div>
          {children}
        </div>
      </div> */}
    </div>
  );
};

export default GardenerLayout;
