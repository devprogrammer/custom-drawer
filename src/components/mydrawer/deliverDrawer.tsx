import { Typography } from "../typography"
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css'
import { CloseModalIcon } from '../../assets/icons';
import { Divider } from "../divider";
import { useWindowSize } from "../../hooks/useWindowSize";

type Props = {
  data?: any,
  open: boolean,
  onClose: () => void,
  onDone: () => void
}

export const DeliverDrawer = ({ data={}, open, onClose, onDone }: Props) => {
  const { isMobile } = useWindowSize();
  
  const DesktopDrawer =  (
      <Drawer
          open={open}
          onClose={onClose}
          direction="right"
          className="drawerr"
          style={{
            overflow: 'auto',
            width: 670,
            background: '#fff'
          }}
        >
          <div className="flex flex-col justify-between h-full overflow-auto p-10">
            <div>
              <div className="drawer-header">
                <div className="flex justify-between items-center">
                  <Typography size={30} weight={700}>Congrats!</Typography>
                  <div onClick={onClose}>
                    <CloseModalIcon/>
                  </div>
                </div>
                <Typography size={20} as="p">We can deliver to:</Typography>
                <Typography size={22} weight={600} align="text-center" as="p">70 E 1st St</Typography>
              </div>
              <Divider />
              <div className='flex flex-col mt-10 gap-3'>
                <div className='flex flex-1 flex-col gap-3'>
                  <Typography size={16} weight={600} align='text-left'>Apt / Suite (optional)</Typography>
                  <input 
                    type='text' 
                    className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] h-[50px] outline-none'
                    placeholder='Write your Apt / Suite'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3'>
                  <Typography size={16} weight={600} align='text-left'>Company Name (optional)</Typography>
                  <input 
                    type='text' 
                    className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] h-[50px] outline-none'
                    placeholder='Write your Company Name'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-3'>
                  <Typography size={16} weight={600} align='text-left'>Delivery Instructions (optional)</Typography>
                  <textarea 
                    className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] min-h-[140px] outline-none'
                    placeholder='Write your delivery instructions'              
                  />
                </div>
              </div>
            </div>
  
            <div className="flex items-center justify-between gap-5 w-full">
              <button
                className="h-auto font-[600] w-full max-w-full tracking-[0.5px] sm:h-[40px] md:h-[45px] lg:h-[50px] cursor-pointer transition-all duration-[0.3s] px-4 py-5 rounded-[10px] hover:opacity-40 bg-[#3e7eff] text-white flex justify-center items-center"
                type="submit"
                onClick={onDone}
              >
                SAVE ADDRESS
              </button>
            </div>
          </div>
        </Drawer>
    )
  
  const MobileDrawer = (
      <Drawer
        open={open}
        onClose={onClose}
        direction="bottom"
        className="drawerr"
        style={{
          overflow: 'auto',
          width: '100%',
          height: '60%',
          background: '#fff',
          borderRadius: '30px 30px 0 0'
        }}
      >
        <div className="flex flex-col justify-between h-full overflow-auto p-4">
          <div>
            <div className="drawer-header">
              <div className="flex justify-between items-center">
                <Typography size={18} weight={700}>Congrats!</Typography>
                <div className="mr-[10px]" onClick={onClose}>
                  <CloseModalIcon/>
                </div>
              </div>
              <Typography size={16} as="p">We can deliver to:</Typography>
              <Typography size={16} weight={700} align="text-center" margin="mt-3" as="p">70 E 1st St</Typography>
            </div>
            <Divider />
            <div className='flex flex-col mt-1 gap-[10px]'>
              <div className='flex flex-1 flex-col gap-[6px]'>
                <Typography size={13} weight={700} align='text-left'>Apt / Suite (optional)</Typography>
                <input 
                  type='text' 
                  className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] h-[40px] outline-none'
                  placeholder='Write your Apt / Suite'
                />
              </div>
              <div className='flex flex-1 flex-col gap-[6px]'>
                <Typography size={13} weight={700} align='text-left'>Company Name (optional)</Typography>
                <input 
                  type='text' 
                  className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] h-[40px] outline-none'
                  placeholder='Write your Company Name'
                />
              </div>
              <div className='flex flex-1 flex-col gap-[6px]'>
                <Typography size={13} weight={700} align='text-left'>Delivery Instructions (optional)</Typography>
                <textarea 
                  className='text-[12px] rounded-[10px] bg-[#5551] px-[12px] py-[6px] min-h-[110px] outline-none'
                  placeholder='Write your delivery instructions'              
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 w-full mb-[10px]">
            <button
              className="h-auto font-[600] w-full max-w-full tracking-[0.5px] sm:h-[40px] md:h-[45px] lg:h-[50px] cursor-pointer transition-all duration-[0.3s] px-1 py-[10px] rounded-full hover:opacity-40 bg-[#3e7eff] text-white flex justify-center items-center"
              type="submit"
              onClick={onDone}
            >
              SAVE ADDRESS
            </button>
          </div>
        </div>
      </Drawer>
    )

  if (isMobile) {
    return MobileDrawer
  } 
  return DesktopDrawer
}