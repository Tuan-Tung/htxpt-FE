'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@/components/Button';
import DetailInfoGarden from '@/components/DetailProduct/DetailInfoGarden';
import { useGardenerDetail } from '@/components/hooks/gardener';
import { gardenerActions } from '@/features/gardener/gardenerSlice';
import { RootState } from '@/stores/store';
import Link from 'next/link';

const GardenerLayout = ({ children }: PropsWithChildren): React.ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [, setActiveTab] = useState('fruits');

  const { data, onGetGardenById } = useGardenerDetail(params.gardenerId);
  const dispatch = useDispatch();

  const handleButtonClick = (code: string) => {
    setActiveTab(code);
    router.push(`/gardeners/${params.gardenerId}/${code}`);
  };

  useEffect(() => {
    onGetGardenById;
  }, [onGetGardenById]);
  const { gardeners } = useSelector((state: RootState) => state.gardener);

  dispatch(gardenerActions.setGardeners(data));
  return (
    <div>
      <div>
        <Link href="/" className="text-[#699C3A]">
          Hợp Tác Xã
        </Link>
        <span className='px-2'>{">"}</span>
        <Link href="/gardeners/all" className="text-[#699C3A]">
          Nhà vườn
        </Link>
        <span className='px-2'>{">"}</span>
        <span>Nhà vườn {`${gardeners?.first_name} ${gardeners?.last_name}`}</span>
      </div>
      <DetailInfoGarden
        name={`${gardeners?.first_name} ${gardeners?.last_name}`}
        bonsaiQuantity={gardeners?.fruits?.length}
        fruitQuantity={gardeners?.bonsai?.length}
        joinedAt={gardeners?.created_at}
        phone={gardeners?.phone}
      />
      <div className="mt-[42px]">
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
      </div>
    </div>
  );
};

export default GardenerLayout;
