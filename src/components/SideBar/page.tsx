import Link from 'next/link';

export const Side_Bar=()=> {
  return (
    <ul className="menu menu-xs bg-base-200  max-w-xs s pt-6 h-full text-[18px]">
      <li>
        <Link href="/Dashboard" className="text-lg font-bold m-2">
          <img className="h-6 w-6" src="Icons/DashBoard.png" alt="Profile Icon" />
          DashBoard
        </Link>
      </li>
      <li>
        <details open>
          <summary className="text-lg font-bold m-2">
            <img className="h-6 w-6" src="Icons/TradingDetails.png" alt="Profile Icon" />
            Trading Details
          </summary>
          <ul>
            <li>
              <Link href="/Signals" className="text-lg font-bold m-2">
                <img className="h-6 w-6" src="Icons/Signal.png" alt="Profile Icon" />
                Signals
              </Link>
            </li>
            <li>
              <Link href="/TradingHistory" className="text-lg font-bold m-2">
                <img className="h-6 w-6" src="Icons/TradingHistory.png" alt="Profile Icon" />
                Trading History
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/TradingStatus" className="text-lg font-bold m-2">
          <img className="h-6 w-6" src="Icons/TradingStatus.png" alt="Profile Icon" />
          Trading Status
        </Link>
      </li>
      <li>
        <Link href="/BrokerResponse" className="text-lg font-bold m-2">
          <img className="h-6 w-6" src="Icons/BrokerResponce.png" alt="Profile Icon" />
          BrokerResponse
        </Link>
      </li>
      <li>
        <Link href="/HelpCenter" className="text-lg font-bold m-2">
          <img className="h-6 w-6" src="Icons/HelpCenter.png" alt="Profile Icon" />
          Help Center
        </Link>
      </li>
    </ul>
  );
}
