export function Button() {
    return (
        <button className="relative py-2 px-6 rounded-4xl border border-[#A1A1AA]/40 text-white overflow-hidden cursor-pointer font-medium">
          Join the waitlist
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#22D3EE]/0 via-[#22D3EE]/70 to-[#22D3EE]/0"></span>
        </button>
    )
}